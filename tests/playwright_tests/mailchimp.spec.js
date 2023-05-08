import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'volunteer to work on my web class' }).click();
  await page.getByLabel('First Name').fill('jon');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('grossman');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('12333232@12123.com');
  await page.getByRole('button', { name: 'Submit' }).click();

  // Wait for the toast to appear
  await page.waitForSelector('#toastMailchimps', { visible: true });

  const toast = await page.$('#toastMailchimps');
  expect(toast).toBeDefined;

  // Get the text content of the ToastDescription element
  const toastDescription = await page.$('.ToastDescription');
  const toastText = await toastDescription.textContent();
  expect(toastText).toContain('success');

  await page.close();
});
