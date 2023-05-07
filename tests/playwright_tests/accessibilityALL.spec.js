const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const axeCore = require('axe-core');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" checking all pages for any accessibility issues`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await checkAccessibility(pageUrl);
  });
});


// ... existing code ...

async function checkAccessibility(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  // Inject axe-core into the page
  const axeSource = axeCore.source;
  await page.evaluate(axeSource);

  // Analyze the page for accessibility issues
  const violations = await page.evaluate(() => {
    // Run axe analysis for the entire document
    return new Promise((resolve) => {
      axe.run((err, results) => {
        if (err) throw err;
        resolve(results.violations);
      });
    });
  });

console.log(Object.keys(violations));
  // Fail the test if any accessibility issues were found
  if (violations.length > 0) {
    console.log('Accessibility issues found',violations);
    expect(violations.length).toBe(0);
  }

  // ... existing code ...

  await browser.close();
}