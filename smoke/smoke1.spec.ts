import { test, expect } from '@playwright/test';

test('homepage smoke test', async ({ page }) => {

  await page.goto('https://journeyunchecked.com');

  await expect(page).toHaveTitle(/Independent travel magazine/i);

  await expect(
    page.getByText('JOURNEY', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByRole('link', { name: /CONTENTS/i }).first()
  ).toBeVisible();

});