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

    await checkPageHeaderTags(pageUrl);
  });
});

async function checkPageHeaderTags(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  for (const tag of headingTags) {
    const headingElement = await page.$(tag);
    expect(headingElement).toBeDefined();
  }

  await browser.close();
}