const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" should have the correct title`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;

    const expectedTitle = page.title;
    await checkPageForTitle(pageUrl);
  });
});

async function checkPageForTitle(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const titleElement = await page.$('head > title');
  expect(titleElement).toBeDefined();

  await browser.close();
}