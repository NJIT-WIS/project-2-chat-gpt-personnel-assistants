const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" should have alt image text`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await checkPageAltImg(pageUrl);
  });
});

async function checkPageAltImg(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const images = await page.$$('img');
  for (const image of images) {
    const altText = await image.getAttribute('alt');
    const srcAttribute = await image.getAttribute('src');
    expect(altText).toBeDefined();
    expect(altText).not.toBe('');
    console.log(altText);
    expect(srcAttribute).toBeDefined();
    expect(srcAttribute).not.toBe('');
    console.log(srcAttribute);
  }

  await browser.close();
}