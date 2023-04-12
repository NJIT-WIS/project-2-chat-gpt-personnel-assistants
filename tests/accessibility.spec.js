import { test, expect } from "@playwright/test";

test('Website satisfies accessibility requirements', async ({ page }) => {
  // Navigate to website
  await page.goto('https://www.jgis219.com/');
  const homeTitle = await page.title();
  expect(homeTitle).toContain('My Web Class')

  // Click on the 'Volunteer' button
  await page.getByRole('button', { name: 'volunteer' }).click();

  // Assert that the modal is displayed
  const modalTitle = await page.title();
  expect(modalTitle).toContain('My Web Class');

  // Close the modal by clicking the '×' button
  await page.getByRole('button', { name: '×' }).click();

  // Click on the link with the specific text
  await page.getByText('unleashing-the-creator-archetype-how-to-psychologically-appeal-to-the-inner-visi').click();

  // Assert that the page title is descriptive and meaningful
  const articleTitle = await page.title();
  expect(articleTitle).toContain("unleashing-the-creator-archetype-how-to-psychologically-appeal-to-the-inner-visionary | Next.js Blog Example with Sanity");

  // Click on the link with the specific text
  await page.getByText('Unlocking the Power of Hero Archetypes').click();

  // Assert that the page title is descriptive and meaningful
  const heroTitle = await page.title();
  expect(heroTitle).toContain("Unlocking the Power of Hero Archetypes | Next.js Blog Example with Sanity");

  // Click on the link with the specific text
  await page.getByText('Volunteer Details').click();

  // Assert that the page title is descriptive and meaningful
  const volunteerTitle = await page.title();
  expect(volunteerTitle).toContain("Volunteer Details | Next.js Blog Example with Sanity");

  // Click on the link with the specific text and role
  await page.getByRole('link', { name: 'Blog' }).click();

  // Assert that the page title is descriptive and meaningful
  const blogTitle = await page.title();
  expect(blogTitle).toContain("My Web Class");
});
