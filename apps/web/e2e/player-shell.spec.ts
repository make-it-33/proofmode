import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

async function enterWorkspace(page: import("@playwright/test").Page) {
  await page.goto("/");
  await page.getByRole("link", { name: /open today’s case/i }).click();
  await page.getByRole("button", { name: /i’m 13 or older/i }).click();
  await expect(page.getByRole("heading", { name: /enterprise revenue is down/i })).toBeVisible();
  await page.getByRole("button", { name: /start six-minute case/i }).click();
  await expect(page.getByRole("heading", { name: "Evidence" })).toBeVisible();
}

test("the promise, age boundary, and evidence workflow form a usable path", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /make the call. show your proof./i })).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
  await expect(page.getByText(/no account · no public result/i)).toBeVisible();

  await page.getByRole("link", { name: /open today’s case/i }).click();
  await expect(page.getByRole("heading", { name: /confirm you’re 13 or older/i })).toBeVisible();
  await page.getByRole("button", { name: /i’m 13 or older/i }).click();
  await expect(page.getByText(/clock paused/i)).toBeVisible();
  await page.getByRole("button", { name: /start six-minute case/i }).click();
  await expect(page.getByLabel(/(?:6:00|5:5\d) remaining/i)).toBeVisible();

  await page.getByRole("button", { name: /q3 packaging change/i }).first().click();
  await page.getByRole("button", { name: /pin source/i }).click();
  await page.getByRole("button", { name: /enterprise renewal outcomes/i }).first().click();
  await page.getByRole("button", { name: /pin source/i }).click();
  await page
    .getByLabel(/working notes/i)
    .fill("The two largest losses follow late implementations; verify price separately.");
  await page.getByRole("tab", { name: /ask ai/i }).click();
  await page.getByLabel(/ask the optional mock ai/i).fill("What is the primary cause?");
  await page.getByRole("button", { name: "Ask AI" }).click();
  await expect(page.getByText(/22% pricing impact looks like the strongest lead/i)).toBeVisible();

  await page.getByRole("tab", { name: /my call/i }).click();
  await page.getByLabel(/enterprise renewal and implementation failure/i).check();
  await page
    .getByLabel(/first action/i)
    .fill("Protect upcoming renewals by assigning one accountable implementation owner today.");
  await page
    .getByLabel(/remaining uncertainty/i)
    .fill("The sample is small, so upcoming account records could change the diagnosis.");
  await page.getByRole("button", { name: /save private draft/i }).click();
  await expect(page.getByText(/draft saved in this tab. no score was created/i)).toBeVisible();

  const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(accessibility.violations).toEqual([]);
});

test("under-13 exit creates no run", async ({ page }) => {
  await page.goto("/entry");
  await page.getByRole("button", { name: /i’m under 13/i }).click();
  await expect(page.getByText(/no run was created and nothing was saved/i)).toBeVisible();
  const storedRun = await page.evaluate(() => sessionStorage.getItem("proofmode.preview.run.v1"));
  expect(storedRun).toBeNull();
});

test("390px workspace has no page-level horizontal overflow and keeps touch targets", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await enterWorkspace(page);
  const dimensions = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.innerWidth);
  const navTargets = page.locator(".mobile-nav button");
  await expect(navTargets).toHaveCount(5);
  for (let index = 0; index < 5; index += 1) {
    const box = await navTargets.nth(index).boundingBox();
    expect(box?.height ?? 0).toBeGreaterThanOrEqual(44);
    expect(box?.width ?? 0).toBeGreaterThanOrEqual(44);
  }
  await page.getByRole("button", { name: "AI", exact: true }).click();
  await expect(page.getByText(/ai starts blank/i)).toBeVisible();
});

test("reduced motion removes the evidence entrance animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await enterWorkspace(page);
  const animationDuration = await page
    .locator(".paper-wrap")
    .evaluate((element) => getComputedStyle(element).animationDuration);
  expect(animationDuration).toBe("0s");
});

test("a 200% zoom-equivalent viewport preserves the workflow without page overflow", async ({ page }) => {
  await page.setViewportSize({ width: 720, height: 900 });
  await enterWorkspace(page);
  const dimensions = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
  }));
  expect(dimensions.documentWidth).toBeLessThanOrEqual(dimensions.viewportWidth);
  await expect(page.locator(".mobile-nav")).toBeVisible();
  await page.getByRole("button", { name: "Call", exact: true }).click();
  await expect(page.getByRole("group", { name: /primary cause/i })).toBeVisible();
});
