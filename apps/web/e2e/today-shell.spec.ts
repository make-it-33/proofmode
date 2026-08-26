import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("Today uses a broad desktop workspace without fabricated live data", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("/app");

  await expect(
    page.getByRole("heading", { name: /practice the judgment ai can’t own/i }),
  ).toBeVisible();
  await expect(page.getByText(/preview data · not a rank/i)).toBeVisible();
  await expect(page.getByText(/bundled fixture · no upload/i)).toBeVisible();

  const layout = await page.evaluate(() => {
    const main = document.querySelector<HTMLElement>(".today-main");
    const command = document.querySelector<HTMLElement>(".today-command");
    const proof = document.querySelector<HTMLElement>(".today-proof-panel");
    return {
      viewportWidth: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      mainWidth: main?.getBoundingClientRect().width ?? 0,
      commandWidth: command?.getBoundingClientRect().width ?? 0,
      proofWidth: proof?.getBoundingClientRect().width ?? 0,
    };
  });

  expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth);
  expect(layout.mainWidth).toBeGreaterThan(1400);
  expect(layout.commandWidth).toBeGreaterThan(900);
  expect(layout.proofWidth).toBeGreaterThan(300);

  const accessibility = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  expect(accessibility.violations).toEqual([]);
});

test("Today exposes deterministic loading, empty, offline, error, and recovery states", async ({ page }) => {
  await page.goto("/app?state=loading");
  await expect(page.getByLabel(/loading today/i)).toHaveAttribute("aria-busy", "true");
  await expect(page.getByText(/practice launch is paused/i)).toBeVisible();

  await page.goto("/app?state=empty");
  await expect(
    page.getByRole("heading", { name: /start with one decision you can prove/i }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /open current practice/i })).toBeVisible();

  await page.goto("/app?state=offline");
  await expect(page.getByRole("status")).toContainText(/you’re offline/i);
  await expect(page.getByRole("link", { name: /open current practice/i })).toBeVisible();

  await page.goto("/app?state=error");
  await expect(page.getByRole("alert")).toContainText(/could not be prepared/i);
  await expect(page.getByText(/practice launch is paused/i)).toBeVisible();
  await page.getByRole("button", { name: /try again/i }).click();
  await expect(
    page.getByRole("heading", { name: /can you catch the ai’s bad call/i }),
  ).toBeVisible();
});

test("Today keeps the mobile composition focused, operable, and overflow-free", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/app");

  await expect(page.locator(".today-sidebar")).toBeHidden();
  await expect(page.locator(".today-mobile-nav")).toBeVisible();

  const dimensions = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
  }));
  expect(dimensions.documentWidth).toBeLessThanOrEqual(dimensions.viewportWidth);

  const controls = page.locator("a:visible, button:visible");
  const count = await controls.count();
  for (let index = 0; index < count; index += 1) {
    const box = await controls.nth(index).boundingBox();
    expect(box?.width ?? 0).toBeGreaterThanOrEqual(44);
    expect(box?.height ?? 0).toBeGreaterThanOrEqual(44);
  }

  await page.getByRole("button", { name: /read the brief/i }).click();
  await expect(page.getByText(/completion contract/i)).toBeVisible();
  await expect(page.getByText(/never enter personal/i)).toBeVisible();
});

test("Today removes entrance and control motion when reduced motion is requested", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/app");

  const motion = await page.locator(".today-command").evaluate((element) => ({
    animationDuration: getComputedStyle(element).animationDuration,
    transitionDuration: getComputedStyle(
      document.querySelector(".today-action") ?? element,
    ).transitionDuration,
  }));
  expect(motion.animationDuration).toBe("0s");
  expect(motion.transitionDuration).toBe("0s");
});
