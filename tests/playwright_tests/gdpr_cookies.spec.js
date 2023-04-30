const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" should have cookie modal`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await checkPageCookieModal(pageUrl);
  });
});

async function checkPageCookieModal(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  // Check if a cookie modal exists and satisfies GDPR requirements
  let hasGDPR = false;
  const gdprTextSelector = 'p:contains("GDPR")';
  const modal = await page.$('[id="headlessui-dialog-overlay-:r1:"]');
  if (modal) {
    const modalText = await modal.textContent();
    const regex = new RegExp(gdprTextSelector);
    hasGDPR = regex.test(modalText);
  }

  if (hasGDPR) {
    // If a cookie modal exists and satisfies GDPR requirements, close it
    await page.getByRole('button', { name: 'Okay' }).click();
  } else {
    throw new Error("It doesn't satisfy GDPR requirements.");
  }

  await browser.close();
}

