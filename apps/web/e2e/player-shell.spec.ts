import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

async function enterScout(page: import("@playwright/test").Page) {
  await page.goto("/");
  await page.getByRole("link", { name: /enter today’s trial/i }).click();
  await page.getByRole("button", { name: /i’m 13 or older/i }).click();
  await expect(page.getByRole("heading", { name: /enterprise revenue is down/i })).toBeVisible();
  await page.getByRole("button", { name: /start six-minute trial/i }).click();
  await expect(page.getByRole("heading", { name: /scout the signal/i })).toBeVisible();
}

async function addSource(page: import("@playwright/test").Page, name: RegExp) {
  await page.getByRole("button", { name }).first().click();
  const toggle = page.getByRole("button", { name: /add to proof/i });
  await toggle.click();
  await expect(page.locator("button.proof-toggle[aria-pressed='true']")).toHaveText(/in proof chain/i);
}

test("Scout, Challenge, recovery, Lock, and result form one usable loop", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /can you catch the ai’s bad call/i })).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
  await expect(page.getByText(/no account · private practice · ages 13\+/i)).toBeVisible();

  await page.getByRole("link", { name: /enter today’s trial/i }).click();
  await expect(page.getByRole("heading", { name: /are you 13 or older/i })).toBeVisible();
  await page.getByRole("button", { name: /i’m 13 or older/i }).click();
  await expect(page.getByText(/clock paused/i)).toBeVisible();
  await page.getByRole("button", { name: /start six-minute trial/i }).click();
  await expect(page.getByLabel(/(?:6:00|5:5\d) remaining/i)).toBeVisible();

  await addSource(page, /q3 packaging change/i);
  await addSource(page, /enterprise renewal outcomes/i);
  await page.getByRole("button", { name: /challenge the ai/i }).click();
  await expect(page.getByRole("heading", { name: /challenge the move/i })).toBeVisible();
  await expect(page.getByText(/22% pricing impact looks like the strongest lead/i)).toBeVisible();

  await page.getByRole("button", { name: /inspect source behind 22%/i }).click();
  await expect(page.getByText(/dashboard is derived/i)).toBeVisible();
  await page.getByRole("button", { name: /check against contract memo/i }).click();
  await expect(page.getByRole("heading", { name: /you caught the ai’s bad call/i })).toBeVisible();
  await page.getByRole("button", { name: /build the final call/i }).click();

  await page.getByLabel(/enterprise renewal and implementation failure/i).check();
  await page.getByLabel(/first action/i).fill(
    "Protect upcoming renewals by assigning one accountable implementation owner today.",
  );
  await page.getByLabel(/remaining uncertainty/i).fill(
    "The sample is small, so upcoming account records could change the diagnosis.",
  );
  await page.getByRole("button", { name: /lock decision/i }).click();

  await expect(page.getByRole("heading", { name: /you recovered before the lock/i })).toBeVisible();
  await expect(page.getByLabel(/86 practice result/i)).toBeVisible();
  await expect(page.getByText(/not a ranked or authoritative correctness score/i)).toBeVisible();

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

test("390px Scout has no page-level overflow and keeps visible actions usable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await enterScout(page);
  const dimensions = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.innerWidth);

  const visibleActions = page.locator("button:visible");
  const count = await visibleActions.count();
  for (let index = 0; index < count; index += 1) {
    const box = await visibleActions.nth(index).boundingBox();
    expect(box?.height ?? 0).toBeGreaterThanOrEqual(44);
    expect(box?.width ?? 0).toBeGreaterThanOrEqual(44);
  }

  await addSource(page, /q3 packaging change/i);
  await expect(page.getByRole("button", { name: /challenge the ai/i })).toBeEnabled();
});

test("reduced motion removes the source entrance animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await enterScout(page);
  const animationDuration = await page
    .locator(".source-card")
    .evaluate((element) => getComputedStyle(element).animationDuration);
  expect(animationDuration).toBe("0s");
});

test("a 200% zoom-equivalent viewport preserves Scout without page overflow", async ({ page }) => {
  await page.setViewportSize({ width: 720, height: 900 });
  await enterScout(page);
  const dimensions = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
  }));
  expect(dimensions.documentWidth).toBeLessThanOrEqual(dimensions.viewportWidth);
  await expect(page.getByRole("heading", { name: /signal queue/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /add to proof/i })).toBeVisible();
});
