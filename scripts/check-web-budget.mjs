import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = path.join(root, "dist", "web");
const limits = {
  javascriptGzip: 180 * 1024,
  initialCssGzip: 25 * 1024,
  routeCssGzip: 8 * 1024,
  totalCssGzip: 30 * 1024,
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
  return gzipSync(await readFile(file)).byteLength;
}

const files = await filesUnder(distRoot);
const javascript = files.filter((file) => /\.(?:js|mjs)$/u.test(file));
const stylesheets = files.filter((file) => /\.css$/u.test(file));
const media = files.filter((file) => /\.(?:avif|gif|jpe?g|png|svg|webp|mp4|webm)$/u.test(file));
const indexHtml = await readFile(path.join(distRoot, "index.html"), "utf8");
const initialStylesheets = stylesheets.filter((file) => indexHtml.includes(path.basename(file)));
const routeStylesheets = stylesheets.filter((file) => !initialStylesheets.includes(file));

let javascriptGzip = 0;
for (const file of javascript) javascriptGzip += await gzipSize(file);
let initialCssGzip = 0;
for (const file of initialStylesheets) initialCssGzip += await gzipSize(file);
let totalCssGzip = initialCssGzip;
const routeCss = [];
for (const file of routeStylesheets) {
  const size = await gzipSize(file);
  totalCssGzip += size;
  routeCss.push({ file: path.relative(root, file), size });
}

const oversizedMedia = [];
for (const file of media) {
  const size = (await stat(file)).size;
  if (size > limits.initialMedia) oversizedMedia.push(`${path.relative(root, file)} (${size} bytes)`);
}

const failures = [];
if (javascriptGzip > limits.javascriptGzip) failures.push(`JavaScript gzip ${javascriptGzip} > ${limits.javascriptGzip}`);
if (stylesheets.length > 0 && initialStylesheets.length === 0) failures.push("No initial stylesheet was detected in index.html");
if (initialCssGzip > limits.initialCssGzip) failures.push(`Initial CSS gzip ${initialCssGzip} > ${limits.initialCssGzip}`);
for (const report of routeCss) {
  if (report.size > limits.routeCssGzip) failures.push(`Route CSS ${report.file} is ${report.size} > ${limits.routeCssGzip}`);
}
if (totalCssGzip > limits.totalCssGzip) failures.push(`Total CSS gzip ${totalCssGzip} > ${limits.totalCssGzip}`);
if (oversizedMedia.length > 0) failures.push(`Oversized media: ${oversizedMedia.join(", ")}`);

if (failures.length > 0) {
  const summary = failures.join("; ");
  if (process.env.GITHUB_ACTIONS === "true") console.error(`::error title=Web budget exceeded::${summary}`);
  console.error(`Web budget check failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

const largestRouteCss = routeCss.reduce((largest, report) => Math.max(largest, report.size), 0);
console.log(`Web budget passed. JS gzip: ${javascriptGzip}. Initial CSS gzip: ${initialCssGzip}. Total CSS gzip: ${totalCssGzip}. Largest route CSS gzip: ${largestRouteCss}. Oversized media: 0.`);
