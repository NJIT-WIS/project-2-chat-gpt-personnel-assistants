const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" should have header tags`, async ({}) => {
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
  const hasCookieModal = await page.evaluate(() => {
    const cookieModalSelector = '#cookie-modal';
    const cookieModal = document.querySelector(cookieModalSelector);
    if (cookieModal) {
      // Check if the cookie modal satisfies GDPR requirements
      const gdprCheckboxSelector = '#gdpr-checkbox';
      const gdprCheckbox = cookieModal.querySelector(gdprCheckboxSelector);
      const gdprConsentTextSelector = 'p:contains("GDPR cookies consent")'; // Add the selector that matches the text on the modal
      const gdprConsentText = cookieModal.querySelector(gdprConsentTextSelector);

      if (gdprCheckbox && gdprConsentText) {
        return true;
      }
    }
    return false;
  });
  console.log(hasCookieModal);

  if (hasCookieModal) {
    // If a cookie modal exists and satisfies GDPR requirements, close it
    await page.click('#gdpr-checkbox');
  }else{
    throw new Error('There is no cookie modal or it doesn\'t satisfies GDPR requirements.');
  }

  await browser.close();
}
