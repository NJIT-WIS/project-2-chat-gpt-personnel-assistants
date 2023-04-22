const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));

const TIMEOUT = 30000;

test('Check consent for google analytics usage and gdpr in privacy', async () => {
  const pageUrl = `${config.use.baseURL}/privacy`;

  await checkPagePrivacy(pageUrl);
});

async function checkPagePrivacy(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const hasGDPRConsent = await page.evaluate(() => {
    const privacyExcerptSelectors = [
      'p:contains("Google Analytics")', // Look for the string "Google Analytics" within <p> tags
      'div:contains("GDPR")', // Look for the string "GDPR" within <div> tags
      // Add other selectors as needed to match the privacy excerpt on the page
    ];

    // Check if any of the privacy excerpt selectors match an element on the page
    for (const selector of privacyExcerptSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        return true;
      }
    }

    // If the privacy excerpt is not found, return false
    return false;
  });

  await browser.close();

  if (!hasGDPRConsent) {
    throw new Error('The privacy page does not contain the required excerpt about GDPR and consent to have data collected by Google Analytics.');
  }
}
