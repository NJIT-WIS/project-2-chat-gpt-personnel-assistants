const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));

const TIMEOUT = 30000;

test('Check consent for google analytics usage in privacy', async () => {
  const pageUrl = `${config.use.baseURL}/privacy`;

  await checkPagePrivacy(pageUrl);
});

async function checkPagePrivacy(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const hasGoogleAnalytics = await page.evaluate(() => {
    const bodyText = document.body.textContent;
    return bodyText.includes('Google Analytics');
  });

  const hasGDPR = await page.evaluate(() => {
    const bodyText = document.body.textContent;
    return bodyText.includes('GDPR');
  });

  const hasCOPPA = await page.evaluate(() => {
    const bodyText = document.body.textContent;
    return bodyText.includes('COPPA');
  });

  await browser.close();

  if (!hasGoogleAnalytics) {
    throw new Error('The privacy page does not contain the required excerpt about Google Analytics.');
  }

  if (!hasGDPR) {
    throw new Error('The privacy page does not contain the required excerpt about GDPR.');
  }

  if (!hasCOPPA) {
    throw new Error('The privacy page does not contain the required excerpt about COPPA.');
  }
}
