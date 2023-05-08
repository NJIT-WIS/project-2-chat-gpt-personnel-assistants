import { test, expect } from '@playwright/test';
test('Mailchimps form toast should fail if non unique email is entered.', async ({ page }) => {
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
  const toastDescription = await page.$('#toastDescription');

  const toastText = await toastDescription.textContent();
  expect(toastText).toContain('Subscription failed. Please try again.');

  await page.close();
});





test('Mailchimps form toast should succeed if  unique email is entered.', async ({ page }) => {
  const email=makeEmail();
  await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'volunteer to work on my web class' }).click();
  await page.getByLabel('First Name').fill('jon');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('grossman');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill(email);
  await page.getByRole('button', { name: 'Submit' }).click();

  // Wait for the toast to appear
  await page.waitForSelector('#toastMailchimps', { visible: true });

  const toast = await page.$('#toastMailchimps');
  expect(toast).toBeDefined;

  // Get the text content of the ToastDescription element
  const toastDescription = await page.$('#toastDescription');

  const toastText = await toastDescription.textContent();
  expect(toastText).toContain('Subscription successful!');

  await page.close();
});











function makeEmail() { 
  var strValues="abcdefg12345"; 
  var strEmail = ""; 
  var strTmp; 
  for (var i=0;i<10;i++) { 
  strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
  strEmail = strEmail + strTmp; 
  } 
  strTmp = ""; 
  strEmail = strEmail + "@"; 
  for (var j=0;j<8;j++) { 
  strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
  strEmail = strEmail + strTmp; 
  } 
  strEmail = strEmail + ".com" 
  return strEmail; 
  } 