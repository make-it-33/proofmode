import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const lessonPath = "/app/learn/agentic-coding/outcome-before-delegating";

async function fillBrief(page: import("@playwright/test").Page) {
  await page.getByLabel("Objective").fill("Make weekly dashboard comparisons readable and faster on mobile without changing the data.");
  await page.getByLabel("In scope").fill("DashboardSummary.tsx and summary.css layout and labels.");
  await page.getByLabel("Out of scope").fill("API responses, authentication, navigation, and unrelated panels.");
  await page.getByLabel("Constraints").fill("Preserve keyboard semantics, data shape, empty and error states, and current dependencies.");
  await page.getByLabel("Evidence").fill("Review the diff, run checks, and inspect the page at 390px and 1440px.");
  await page.getByLabel("Done criteria").fill("Labels do not overlap, meaning survives without color, checks pass, and rollback is one slice.");
}

test("the first lesson is a broad, accessible source-builder-contract workspace", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(lessonPath);

  await expect(page.getByRole("heading", { name: /turn a vague request into a brief/i })).toBeVisible();
  await expect(page.getByText("“Make the weekly dashboard better.”")).toBeVisible();
  await expect(page.getByText(/no account · no save · no ai judgment/i)).toBeVisible();

  const layout = await page.evaluate(() => {
    const main = document.querySelector<HTMLElement>(".lesson-main");
    const source = document.querySelector<HTMLElement>(".lesson-source");
    const builder = document.querySelector<HTMLElement>(".lesson-builder");
    const contract = document.querySelector<HTMLElement>(".lesson-contract-preview");
    return {
      viewportWidth: innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      mainWidth: main?.getBoundingClientRect().width ?? 0,
      sourceWidth: source?.getBoundingClientRect().width ?? 0,
      builderWidth: builder?.getBoundingClientRect().width ?? 0,
      contractWidth: contract?.getBoundingClientRect().width ?? 0,
    };
  });

  expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth);
  expect(layout.mainWidth).toBeGreaterThan(1400);
  expect(layout.sourceWidth).toBeGreaterThan(300);
  expect(layout.builderWidth).toBeGreaterThan(650);
  expect(layout.contractWidth).toBeGreaterThan(300);

  const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(accessibility.violations).toEqual([]);
});

test("a learner can transform the source, self-check it, and reach an honest local completion", async ({ page }) => {
  const applicationRequests: string[] = [];
  page.on("request", (request) => {
    if (["fetch", "xhr"].includes(request.resourceType())) applicationRequests.push(request.url());
  });
  await page.goto(lessonPath);

  await page.getByRole("button", { name: /use a progressive hint/i }).click();
  await expect(page.getByText(/observable outcome.*allowed boundary/i)).toBeVisible();
  await fillBrief(page);
  await page.getByRole("button", { name: /check structure/i }).click();

  const reviewHeading = page.getByRole("heading", { name: /challenge the brief before an agent sees it/i });
  await expect(reviewHeading).toBeVisible();
  await expect(reviewHeading).toBeFocused();
  for (const label of [
    /objective is observable/i,
    /change boundary has two sides/i,
    /constraints come from the source/i,
    /evidence can actually be checked/i,
    /finish line supports a decision/i,
  ]) {
    await page.getByRole("checkbox", { name: label }).check();
  }
  await page.getByRole("button", { name: /prepare for checkpoint/i }).click();

  await expect(page.getByRole("heading", { name: /brief is ready for guided practice/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /guided checkpoint.*coming next/i })).toBeDisabled();
  await expect(page.getByText(/nothing has been submitted, scored, or saved/i)).toBeVisible();
  expect(await page.evaluate(() => localStorage.length)).toBe(0);
  expect(applicationRequests).toEqual([]);
});

test("the lesson exposes incomplete, loading, offline, error, hint, checkpoint, and complete states", async ({ page }) => {
  await page.goto(`${lessonPath}?state=incomplete`);
  await expect(page.getByRole("alert")).toContainText(/structural gaps/i);
  await expect(page.getByLabel("In scope")).toHaveAttribute("aria-invalid", "true");

  await page.goto(`${lessonPath}?state=loading`);
  await expect(page.getByLabel(/loading focused lesson/i)).toHaveAttribute("aria-busy", "true");
  await expect(page.getByRole("button", { name: /check structure/i })).toHaveCount(0);

  await page.goto(`${lessonPath}?state=offline`);
  await expect(page.getByRole("status")).toContainText(/you’re offline/i);
  await expect(page.getByRole("button", { name: /check structure/i })).toBeEnabled();

  await page.goto(`${lessonPath}?state=error`);
  await expect(page.getByRole("alert")).toContainText(/could not be prepared/i);
  await expect(page.getByText(/no draft, personal data, score, or request/i)).toBeVisible();
  await page.getByRole("button", { name: /try again/i }).click();
  await expect(page.getByRole("heading", { name: /build the delegation contract/i })).toBeVisible();

  await page.goto(`${lessonPath}?state=hint`);
  await expect(page.getByText(/could someone test every claim/i)).toBeVisible();

  await page.goto(`${lessonPath}?state=checkpoint`);
  await expect(page.getByRole("status")).toContainText(/checkpoint-ready demonstration/i);
  await expect(page.getByRole("button", { name: /prepare for checkpoint/i })).toBeEnabled();

  await page.goto(`${lessonPath}?state=complete`);
  await expect(page.getByRole("status")).toContainText(/complete-state demonstration/i);
  await expect(page.getByRole("heading", { name: /completed lesson boundary behaves/i })).toBeVisible();
  await expect(page.getByText(/does not represent your progress/i)).toBeVisible();
});

test("the lesson becomes a focused, operable sequence at 390px and 200%-equivalent width", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(lessonPath);
  await expect(page.locator(".lesson-sidebar")).toBeHidden();
  await expect(page.locator(".lesson-action-dock")).toBeVisible();

  let dimensions = await page.evaluate(() => ({ viewportWidth: innerWidth, documentWidth: document.documentElement.scrollWidth }));
  expect(dimensions.documentWidth).toBeLessThanOrEqual(dimensions.viewportWidth);

  const controls = page.locator("a:visible, button:visible");
  const count = await controls.count();
  for (let index = 0; index < count; index += 1) {
    const box = await controls.nth(index).boundingBox();
    expect(box?.width ?? 0).toBeGreaterThanOrEqual(44);
    expect(box?.height ?? 0).toBeGreaterThanOrEqual(44);
  }

  await page.setViewportSize({ width: 640, height: 800 });
  dimensions = await page.evaluate(() => ({ viewportWidth: innerWidth, documentWidth: document.documentElement.scrollWidth }));
  expect(dimensions.documentWidth).toBeLessThanOrEqual(dimensions.viewportWidth);
});

test("exit is explicit and reduced motion preserves the lesson", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(lessonPath);
  const motion = await page.locator(".lesson-builder").evaluate((element) => ({
    animationDuration: getComputedStyle(element).animationDuration,
    transitionDuration: getComputedStyle(document.querySelector(".lesson-action-dock button") ?? element).transitionDuration,
  }));
  expect(motion.animationDuration).toBe("0s");
  expect(motion.transitionDuration).toBe("0s");

  await page.getByRole("button", { name: /exit lesson/i }).click();
  const dialog = page.getByRole("alertdialog", { name: /leave this lesson/i });
  await expect(dialog).toBeVisible();
  await expect(page.getByRole("button", { name: /stay with the draft/i })).toBeFocused();
  await expect(dialog).toContainText(/draft will disappear/i);
  await page.getByRole("button", { name: /stay with the draft/i }).click();
  await expect(dialog).toHaveCount(0);
});
