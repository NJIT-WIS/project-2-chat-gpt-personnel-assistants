const { test, expect } = require('@playwright/test');
const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const path = require('path');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));
const TIMEOUT = 30000;

const { chromium } = require('playwright');

const runLighthouseAudit = async (pageUrl, expectedAccessibilityScore) => {
  const reportPath = 'lighthouse-report.json';
  const command = `npx lighthouse ${pageUrl} --output json --output-path ${reportPath} --only-categories=accessibility --chrome-flags="--headless --no-sandbox"`;

  try {
    execSync(command);
  } catch (error) {
    console.error('Error running Lighthouse:', error);
  }

  const lhr = JSON.parse(readFileSync(reportPath));

  const accessibilityScore = lhr.categories.accessibility.score * 100;
  expect(accessibilityScore).toBeGreaterThanOrEqual(expectedAccessibilityScore);
};

pages.forEach((page) => {
  test(`Page "${page.path}" should score higher than 90 on lighthouse accessibility`, async ({}) => {
    console.log(page.path);
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await runLighthouseAudit(pageUrl, 90);
  });
});
