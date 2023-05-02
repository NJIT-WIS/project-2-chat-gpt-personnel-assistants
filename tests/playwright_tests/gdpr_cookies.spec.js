const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;


// Define the function to check the modal
async function checkPageCookieModal(pageUrl, context) {
  const page = await context.newPage();
  await page.goto(pageUrl);
  
  // Wait for the specific text content in the modal
  await page.waitForSelector('text=We value your privacy');
  
  // Now select the modal and perform the checks
  const gdprModal = await page.$('#gdprModal');

  // Expect that the GDPR cookie modal is visible
  expect(await gdprModal.isVisible()).toBe(true);
  
  // Check the text content of the modal
  const gdprModalText = await gdprModal.textContent();
  expect(gdprModalText).toContain('We value your privacy');
  
  await page.close();
}

// Use the function in your test
pages.forEach((page) => {
  test(`Page "${page.path}" should have cookie modal`, async ({ context }) => {
    console.log(page.path);
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await checkPageCookieModal(pageUrl, context);
  });
});

