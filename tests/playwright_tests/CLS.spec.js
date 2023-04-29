const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" check Cumulative Layout Shift`, async ({}) => {
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await checkPageCLS(pageUrl);
  });
});

async function checkPageCLS(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const cls = await page.evaluate(() => {
    let cls = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      for (const entry of entries) {
        if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
          cls += entry.value;
        }
      }
    }).observe({ type: 'layout-shift', buffered: true });
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cls);
      }, 5000);
    });
  });
  if (cls > 0.1) {
    throw new Error(`The page has a high Cumulative Layout Shift (${cls}).`);
  }

  await browser.close();
}