import { expect, test } from '@playwright/test';
import Color from 'color';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("SocialProofSectionMasterAngular");
});


test('has rate and comments', async ({ page }) => {
  await page.goto('/');

  const title = page.getByText('10,000+ of our users love our products.');
  await expect(title).toBeVisible();
  const colorRgb = new Color('hsl(300, 43%, 22%)').rgb().toString();
  await expect(title).toHaveCSS('color', colorRgb);

  const titleFontSize = await title.evaluate(el => window.getComputedStyle(el).fontSize);
  await expect(titleFontSize).toBe(`${15 * 2.5 * 1.5}px`);
});