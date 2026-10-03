import { test, expect } from '@playwright/test';

const navigationCases = [
  {
    name: 'Huangshan',
    href: '/huangshan/',
    linkName: /Where the Stone Peaks Rise Above the Clouds/i,
    expectedUrl: /\/huangshan\/$/,
    heading: /Huangshan/i,
  },
  {
    name: 'Jordan',
    href: '/jordan/',
    linkName: /Between Stone, Sand, Salt, and Stories/i,
    expectedUrl: /\/jordan\/$/,
    heading: /Between Stone, Sand, Salt, and Stories/i,
  },
  {
    name: 'Cambodia',
    href: '/cambodia/',
    linkName: /I Came for Angkor Wat, I Stayed for the People/i,
    expectedUrl: /\/cambodia\/$/,
    heading: /I Came for Angkor Wat/i,
  },
    {
    name: 'Travel Lightly',
    href: '/travel-light/',
    expectedUrl: /\/travel-light\/$/,
    heading: /Travel Lightly/i,
  },
];
for (const navCase of navigationCases) {
  test(`navigation to ${navCase.name} works`, async ({ page }) => {
    await page.goto('/contents/');

    // only main page
    const link = page.locator(
      `main a[href$="${navCase.href}"]`
    ).first();

    await expect(link).toBeVisible();

    await link.click();

    await expect(page).toHaveURL(navCase.expectedUrl);

    await expect(
      page.getByRole('heading', { name: navCase.heading }).first()
    ).toBeVisible();
  });
}





test('Travel Lightly card navigation', async ({ page }) => {
  await page.goto('/contents/');

  const link = page.locator(
    'main a[href$="/travel-light/"]'
  );

  await expect(link).toBeVisible();

  await link.click();

  await expect(page).toHaveURL(/\/travel-light\/$/);

  await expect(
    page.getByRole('heading', { name: /Travel Lightly/i }).first()
  ).toBeVisible();
});