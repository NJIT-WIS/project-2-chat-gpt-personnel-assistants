import { test, expect } from "@playwright/test";

test("test website functionality", async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://www.jgis219.com/');

  // Check for the presence of the og:image meta tag
  let ogImage = await page.$('meta[property="og:image"]');
  expect(ogImage).not.toBeNull();

  // Check the content of the og:image meta tag
  let ogImageUrl = await ogImage.getAttribute("content");
  expect(ogImageUrl).toMatch(/^https?:\/\/.+$/);

  // Click on the first link
  await page.getByText('unleashing-the-creator-archetype-how-to-psychologically-appeal-to-the-inner-visi').click();

  // Check for the presence of the og:image meta tag
  ogImage = await page.$('meta[property="og:image"]');
  expect(ogImage).not.toBeNull();

  // Check the content of the og:image meta tag
  ogImageUrl = await ogImage.getAttribute("content");
  expect(ogImageUrl).toMatch(/^https?:\/\/.+$/);

  // Click on the second link
  await page.getByText('Volunteer Details').click();

  // Check for the presence of the og:image meta tag
  ogImage = await page.$('meta[property="og:image"]');
  expect(ogImage).not.toBeNull();

  // Check the content of the og:image meta tag
  ogImageUrl = await ogImage.getAttribute("content");
  expect(ogImageUrl).toMatch(/^https?:\/\/.+$/);

  // Click on the third link
  await page.getByText('Unlocking the Power of Hero Archetypes').click();

  // Check for the presence of the og:image meta tag
  ogImage = await page.$('meta[property="og:image"]');
  expect(ogImage).not.toBeNull();

  // Check the content of the og:image meta tag
  ogImageUrl = await ogImage.getAttribute("content");
  expect(ogImageUrl).toMatch(/^https?:\/\/.+$/);

  // Click on the "Blog" link
  await page.getByRole('link', { name: 'Blog' }).click();

  // Check for the presence of the og:image meta tag
  ogImage = await page.$('meta[property="og:image"]');
  expect(ogImage).not.toBeNull();

  // Check the content of the og:image meta tag
  ogImageUrl = await ogImage.getAttribute("content");
  expect(ogImageUrl).toMatch(/^https?:\/\/.+$/);
});