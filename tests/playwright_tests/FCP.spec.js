const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" check first contentful paint`, async ({}) => {
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await checkPageFCP(pageUrl);
  });
});

async function checkPageFCP(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.timing))
  );
  const firstContentfulPaint = performanceTiming.responseStart - performanceTiming.requestStart;
  const isFastEnough = firstContentfulPaint < 2000; // Check if FCP is less than 2 seconds
  if (!isFastEnough) {
    throw new Error('The page does not load fast enough (FCP > 2 seconds).');
  }

  await browser.close();
}
