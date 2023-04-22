const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {
  test(`Page "${page.path}" should have descriptive link text`, async () => {
    const pageUrl = `${config.use.baseURL}${page.path}`;
    await checkPageLinksHaveDescriptiveText(pageUrl);
  });
});

async function checkPageLinksHaveDescriptiveText(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  // Get all links on the page
  const links = await page.$$('a');

  // Check each link for descriptive text
  for (const link of links) {
    const linkText = await link.textContent();
    console.log(linkText);
    // Add your own condition for what is considered 'descriptive text'
    const hasDescriptiveText = linkText.trim();

    expect(hasDescriptiveText).toBeDefined();
  }

  await browser.close();
}