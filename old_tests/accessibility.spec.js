import { test, expect } from '@playwright/test';

test('All form elements have associated labels', async ({ page }) => {
  await page.goto('https://www.jgis219.com/');

  // Find all form elements
  const homeFormElements = await page.$$('form *');

  // Check each form element has an associated label
  for (const element of homeFormElements) {
    const label = await element.evaluateHandle(
      (node) => document.querySelector(`label[for="${node.id}"]`)
    );
    expect(label).not.toBeNull();
  }

  await page.getByText('unleashing-the-creator-archetype-how-to-psychologically-appeal-to-the-inner-visi').click();
  const psychFormElements = await page.$$('form *');

  // Check each form element has an associated label
  for (const element of psychFormElements) {
    const label = await element.evaluateHandle(
      (node) => document.querySelector(`label[for="${node.id}"]`)
    );
    expect(label).not.toBeNull();
  }

  await page.getByText('Volunteer Details').click();
  const volunteerFormElements = await page.$$('form *');

  // Check each form element has an associated label
  for (const element of volunteerFormElements) {
    const label = await element.evaluateHandle(
      (node) => document.querySelector(`label[for="${node.id}"]`)
    );
    expect(label).not.toBeNull();
  }

  await page.getByText('Unlocking the Power of Hero Archetypes').click();
  const heroFormElements = await page.$$('form *');

  // Check each form element has an associated label
  for (const element of heroFormElements) {
    const label = await element.evaluateHandle(
      (node) => document.querySelector(`label[for="${node.id}"]`)
    );
    expect(label).not.toBeNull();
  }
});
