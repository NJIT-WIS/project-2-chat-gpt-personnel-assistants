const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" check largest contentful paint`, async ({}) => {
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await checkPageLCP(pageUrl);
  });
});

async function checkPageLCP(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const { timing } = await page.evaluate(() => ({
    timing: performance.getEntriesByType('largest-contentful-paint')[0],
  }));

  if (!timing || !timing.renderTime || timing.renderTime > 2000) {
    throw new Error('The page does not have a fast enough LCP (render time > 2 seconds).');
  }

  await browser.close();
}
