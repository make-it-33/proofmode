import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("Learn uses a broad curriculum workspace and exposes an honest next lesson", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("/app/learn");

  await expect(
    page.getByRole("heading", { name: /see the whole path.*clear next step/i }),
  ).toBeVisible();
  await expect(page.getByText("Local curriculum preview", { exact: true })).toBeVisible();
  await expect(page.getByText(/no account · no saved progress/i)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /define the outcome before delegating/i }),
  ).toBeVisible();

  const layout = await page.evaluate(() => {
    const main = document.querySelector<HTMLElement>(".learn-main");
    const next = document.querySelector<HTMLElement>(".learn-next");
    const overview = document.querySelector<HTMLElement>(".learn-overview");
    return {
      viewportWidth: innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      mainWidth: main?.getBoundingClientRect().width ?? 0,
      nextWidth: next?.getBoundingClientRect().width ?? 0,
      overviewWidth: overview?.getBoundingClientRect().width ?? 0,
    };
  });

  expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth);
  expect(layout.mainWidth).toBeGreaterThan(1400);
  expect(layout.nextWidth).toBeGreaterThan(900);
  expect(layout.overviewWidth).toBeGreaterThan(300);

  const accessibility = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  expect(accessibility.violations).toEqual([]);

  await page.getByRole("link", { name: /view agentic coding path/i }).click();
  await expect(page).toHaveURL(/\/app\/learn\/agentic-coding$/u);
  await page.getByRole("button", { name: /inspect lesson contract/i }).click();
  await expect(page.getByRole("heading", { name: /define the outcome before delegating/i }).last()).toBeVisible();
  await expect(page.getByText(/interactive lesson is the next slice/i)).toBeVisible();
});

test("Learn exposes deterministic loading, empty, offline, unavailable, complete, future, error, and recovery states", async ({ page }) => {
  await page.goto("/app/learn?state=loading");
  await expect(page.getByLabel(/loading learn/i)).toHaveAttribute("aria-busy", "true");

  await page.goto("/app/learn?state=empty");
  await expect(page.getByRole("heading", { name: /choose a field before opening/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /open private setup/i })).toBeVisible();

  await page.goto("/app/learn?state=offline");
  await expect(page.getByRole("status")).toContainText(/you’re offline/i);
  await expect(page.getByRole("link", { name: /view agentic coding path/i })).toBeVisible();

  await page.goto("/app/learn/agentic-coding?state=unavailable");
  await expect(page.getByRole("status")).toContainText(/temporarily unavailable/i);
  await expect(page.getByRole("button", { name: /inspect lesson contract/i })).toBeDisabled();

  await page.goto("/app/learn?state=complete");
  await expect(page.getByRole("status")).toContainText(/completed-path demonstration/i);
  await expect(page.getByText(/not your saved progress/i).first()).toBeVisible();

  await page.goto("/app/learn?state=future");
  await expect(page.getByRole("heading", { name: /does not claim lessons yet/i })).toBeVisible();
  await expect(page.getByText(/roadmap does not mean available/i)).toBeVisible();

  await page.goto("/app/learn?state=error");
  await expect(page.getByRole("alert")).toContainText(/could not be prepared/i);
  await expect(page.getByText(/nothing was sent, saved, scored, or deleted/i)).toBeVisible();
  await page.getByRole("button", { name: /try again/i }).click();
  await expect(page.getByRole("heading", { name: /define the outcome before delegating/i })).toBeVisible();
});

test("Learn becomes a focused, operable timeline with a sticky next action at 390px", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/app/learn");

  await expect(page.locator(".today-sidebar")).toBeHidden();
  await expect(page.locator(".today-mobile-nav")).toBeVisible();
  await expect(page.locator(".learn-mobile-dock")).toBeVisible();

  const dimensions = await page.evaluate(() => ({
    viewportWidth: innerWidth,
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

  await page.locator(".learn-mobile-dock a").click();
  await expect(page).toHaveURL(/\/app\/learn\/agentic-coding$/u);
});

test("Learn removes entrance and control motion when reduced motion is requested", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/app/learn");

  const motion = await page.locator(".learn-next").evaluate((element) => ({
    animationDuration: getComputedStyle(element).animationDuration,
    transitionDuration: getComputedStyle(
      document.querySelector(".learn-button") ?? element,
    ).transitionDuration,
  }));
  expect(motion.animationDuration).toBe("0s");
  expect(motion.transitionDuration).toBe("0s");
});
