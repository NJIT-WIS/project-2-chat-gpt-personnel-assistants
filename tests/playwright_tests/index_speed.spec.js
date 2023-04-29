const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" check speed index`, async ({}) => {
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await checkPageSpeed(pageUrl);
  });
});

async function checkPageSpeed(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: 30000 });

  // Wait for the performance observer to fire and get the speed index value
  await page.waitForSelector('#page-loaded');

  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.timing))
  );

  const pageLoadTime = performanceTiming.loadEventEnd - performanceTiming.navigationStart;

  await browser.close();

  if (pageLoadTime > 3000) {
    throw new Error('The page has a high Speed Index (> 3000).');
  }
}