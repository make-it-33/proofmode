import { createReadStream } from "node:fs";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";
import { createGzip } from "node:zlib";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = path.join(root, "dist", "web");
const limits = {
  javascriptGzip: 180 * 1024,
  cssGzip: 25 * 1024,
  initialMedia: 350 * 1024,
};

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesUnder(absolute)));
    else files.push(absolute);
  }
  return files;
}

async function gzipSize(file) {
  let total = 0;
  const counter = new TransformStream({
    transform(chunk, controller) {
      total += chunk.byteLength;
      controller.enqueue(chunk);
    },
  });
  const writable = counter.writable.getWriter();
  const gzip = createGzip();
  gzip.on("data", (chunk) => writable.write(chunk));
  gzip.on("end", () => writable.close());
  await pipeline(createReadStream(file), gzip);
  await counter.readable.pipeTo(new WritableStream());
  return total;
}

const files = await filesUnder(distRoot);
const javascript = files.filter((file) => /\.(?:js|mjs)$/u.test(file));
const stylesheets = files.filter((file) => /\.css$/u.test(file));
const media = files.filter((file) => /\.(?:avif|gif|jpe?g|png|svg|webp|mp4|webm)$/u.test(file));

let javascriptGzip = 0;
for (const file of javascript) javascriptGzip += await gzipSize(file);
let cssGzip = 0;
for (const file of stylesheets) cssGzip += await gzipSize(file);

const oversizedMedia = [];
for (const file of media) {
  const size = (await stat(file)).size;
  if (size > limits.initialMedia) oversizedMedia.push(`${path.relative(root, file)} (${size} bytes)`);
}

const failures = [];
if (javascriptGzip > limits.javascriptGzip) {
  failures.push(`JavaScript gzip ${javascriptGzip} > ${limits.javascriptGzip}`);
}
if (cssGzip > limits.cssGzip) failures.push(`CSS gzip ${cssGzip} > ${limits.cssGzip}`);
if (oversizedMedia.length > 0) failures.push(`Oversized media: ${oversizedMedia.join(", ")}`);

if (failures.length > 0) {
  console.error(`Web budget check failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(`Web budget passed. JS gzip: ${javascriptGzip}. CSS gzip: ${cssGzip}. Oversized media: 0.`);
