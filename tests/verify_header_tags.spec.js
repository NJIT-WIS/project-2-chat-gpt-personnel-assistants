const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;

async function checkPageHeaderTags(pageUrl, expectedTags) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  for (const tag of expectedTags) {
    const el = await page.$(tag);
    if (el) {
      const actualTag = await el.evaluate(el => el.tagName.toLowerCase());
      expect(actualTag).toBe(tag);
    }
  }

  await browser.close();
}

pages.forEach((page) => {
  test(`Page "${page.path}" should have the correct header tags`, async () => {
    const pageUrl = `http://localhost:3000${page.path}`;

    const expectedTags = page.headerTags;
    await checkPageHeaderTags(pageUrl, expectedTags);
  });
});
