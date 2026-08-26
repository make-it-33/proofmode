import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("onboarding uses the broad desktop workspace and passes WCAG checks", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("/app/onboarding");
  await expect(page.getByRole("heading", { name: /build a path that fits you/i })).toBeVisible();
  await expect(page.getByText(/nothing leaves this page/i)).toBeVisible();
  const layout = await page.evaluate(() => {
    const story = document.querySelector<HTMLElement>(".onboarding-story");
    const workspace = document.querySelector<HTMLElement>(".onboarding-workspace");
    return {
      viewportWidth: innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      storyWidth: story?.getBoundingClientRect().width ?? 0,
      workspaceWidth: workspace?.getBoundingClientRect().width ?? 0,
    };
  });
  expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth);
  expect(layout.storyWidth).toBeGreaterThan(560);
  expect(layout.workspaceWidth).toBeGreaterThan(1000);
  const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(accessibility.violations).toEqual([]);
});

test("age boundary blocks progress and exits under-13 users without collecting data", async ({ page }) => {
  await page.goto("/app/onboarding");
  await page.getByRole("button", { name: /set up my path/i }).click();
  await expect(page.getByRole("heading", { name: /are you 13 or older/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /^continue$/i })).toBeDisabled();
  await page.getByRole("radio", { name: /i’m under 13/i }).check();
  await page.getByRole("button", { name: /confirm and exit/i }).click();
  await expect(page.getByRole("heading", { name: /currently starts at age 13/i })).toBeVisible();
  await expect(page.getByText(/no run · no profile · nothing saved/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /return to the proofmode website/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /continue/i })).toHaveCount(0);
});

test("eligible learners can complete reversible field setup without persistence claims", async ({ page }) => {
  await page.goto("/app/onboarding");
  await page.getByRole("button", { name: /set up my path/i }).click();
  await page.getByRole("radio", { name: /i’m 13 or older/i }).check();
  await page.getByRole("button", { name: /^continue$/i }).click();
  await page.getByRole("radio", { name: /build real projects/i }).check();
  await page.getByRole("button", { name: /^continue$/i }).click();
  await page.getByRole("radio", { name: /agentic coding/i }).check();
  await expect(page.getByRole("radio", { name: /design with ai/i })).toBeDisabled();
  await page.getByRole("button", { name: /^continue$/i }).click();
  await page.getByRole("radio", { name: /10 minutes/i }).check();
  await page.getByRole("button", { name: /^continue$/i }).click();
  await page.getByRole("checkbox", { name: /reduce interface motion/i }).check();
  await page.getByRole("checkbox", { name: /calmer timer treatment/i }).check();
  await page.getByRole("button", { name: /^continue$/i }).click();
  await expect(page.getByRole("heading", { name: /first path has a clear starting point/i })).toBeVisible();
  await expect(page.getByText("Build real projects", { exact: true })).toBeVisible();
  await expect(page.getByText("Agentic Coding", { exact: true })).toBeVisible();
  await expect(page.getByText("10 minutes", { exact: true })).toBeVisible();
  await expect(page.getByText(/closing or refreshing forgets every selection/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /open private checkpoint/i })).toHaveAttribute("href", "/play");
  await page.getByRole("button", { name: /review choices/i }).click();
  await expect(page.getByRole("heading", { name: /what should proofmode help you do first/i })).toBeVisible();
  await expect(page.getByRole("radio", { name: /build real projects/i })).toBeChecked();
});

test("onboarding remains focused and operable at 390px", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/app/onboarding");
  const layout = await page.evaluate(() => ({ viewportWidth: innerWidth, documentWidth: document.documentElement.scrollWidth }));
  expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth);
  const controls = page.locator("a:visible, button:visible, label:visible");
  const count = await controls.count();
  for (let index = 0; index < count; index += 1) {
    const box = await controls.nth(index).boundingBox();
    expect(box?.width ?? 0).toBeGreaterThanOrEqual(44);
    expect(box?.height ?? 0).toBeGreaterThanOrEqual(44);
  }
  await page.getByRole("button", { name: /set up my path/i }).click();
  await expect(page.getByRole("heading", { name: /are you 13 or older/i })).toBeVisible();
});

test("onboarding exposes deterministic offline, error, loading, recovery, and reduced-motion behavior", async ({ page }) => {
  await page.goto("/app/onboarding?state=loading");
  await expect(page.getByLabel(/loading onboarding/i)).toHaveAttribute("aria-busy", "true");
  await page.goto("/app/onboarding?state=offline");
  await expect(page.getByRole("status")).toContainText(/you’re offline/i);
  await expect(page.getByRole("button", { name: /set up my path/i })).toBeEnabled();
  await page.goto("/app/onboarding?state=error");
  await expect(page.getByRole("alert")).toContainText(/could not be prepared/i);
  await page.getByRole("button", { name: /try again/i }).click();
  await expect(page.getByRole("heading", { name: /learn, practise, prove/i })).toBeVisible();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/app/onboarding");
  const motion = await page.locator(".onboarding-stage").evaluate((element) => ({
    animationDuration: getComputedStyle(element).animationDuration,
    transitionDuration: getComputedStyle(document.querySelector(".onboarding-button") ?? element).transitionDuration,
  }));
  expect(motion.animationDuration).toBe("0s");
  expect(motion.transitionDuration).toBe("0s");
});
