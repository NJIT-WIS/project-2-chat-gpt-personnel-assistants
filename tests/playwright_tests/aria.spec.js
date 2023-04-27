const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" should have aria attribute`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await checkPageAria(pageUrl);
  });
});

async function checkPageAria(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const elementsWithAriaAttributes = await page.$$('body [aria^=""]');
  for (const element of elementsWithAriaAttributes) {
    const attributes = await element.attributes();
    for (const attributeName in attributes) {
      if (attributeName.startsWith('aria-')) {
        const attributeValue = attributes[attributeName];
        expect(attributeValue).toBeDefined();
        expect(attributeValue).not.toBe('');
      }
    }
  }

  await browser.close();
}