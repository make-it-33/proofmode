import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const publicPages = [
  ["/about", /practice for the decisions ai cannot own/i],
  ["/guide", /your first mission, without the guesswork/i],
  ["/premium", /pay for depth—not artificial limits/i],
  ["/support", /get unstuck. tell us what failed/i],
  ["/download", /start in the browser. native apps are next/i],
] as const;

test("secondary public pages render with accessible structure", async ({ page }) => {
  for (const [path, heading] of publicPages) {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    expect(accessibility.violations, path).toEqual([]);
  }
});

test("tutorial explains the full mission loop", async ({ page }) => {
  await page.goto("/guide");
  await page.getByRole("tab", { name: /replay the proof/i }).click();
  await expect(
    page.getByRole("heading", { name: /review the moment that changed the outcome/i }),
  ).toBeVisible();
  await expect(page.locator(".pm-guide-screen")).toHaveAttribute("data-guide-step", "5");
});

test("support form is honest and does not claim delivery", async ({ page }) => {
  await page.goto("/support");
  await page.locator('select[name="topic"]').selectOption({ label: "Product suggestion" });
  await page
    .locator('textarea[name="message"]')
    .fill("Keep the evidence visible after the player locks a decision.");
  await page.getByRole("button", { name: /check feedback form/i }).click();
  await expect(page.getByRole("status")).toContainText(/validated but not sent/i);
});

test("download page opens the web app and labels native installers honestly", async ({
  page,
}) => {
  await page.goto("/download");
  await expect(page.getByRole("button", { name: /windows installer/i })).toBeDisabled();
  await expect(page.getByRole("button", { name: /macos installer/i })).toBeDisabled();
  await page.getByRole("link", { name: /open proofmode web app/i }).click();
  await expect(page).toHaveURL(/\/play$/u);
  await expect(
    page.getByRole("heading", { name: /can you catch the ai’s bad call/i }),
  ).toBeVisible();
});

test("mobile navigation exposes every public page and the temporary web app", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByText("Menu", { exact: true }).click();
  const menu = page.locator(".pm-mobile-nav");
  for (const label of ["About", "How it works", "Premium", "Support", "Download", "Open app"]) {
    await expect(menu.getByRole("link", { name: label, exact: true })).toBeVisible();
  }
});
