const { test, expect } = require('@playwright/test');
const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const path = require('path');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));
const TIMEOUT = 30000;

const { chromium } = require('playwright');

const runLighthouseAudit = async (pageUrl, expectedScores) => {
  const reportPath = 'lighthouse-report.json';
  const command = `npx lighthouse ${pageUrl} --output json --output-path ${reportPath} --chrome-flags="--headless --no-sandbox"`;

  try {
    execSync(command);
  } catch (error) {
    console.error('Error running Lighthouse:', error);
  }

  const lhr = JSON.parse(readFileSync(reportPath));

  for (const category in expectedScores) {
    const categoryScore = lhr.categories[category].score * 100;
    console.log(`${category} score:`, categoryScore);
    expect(categoryScore).toBeGreaterThanOrEqual(expectedScores[category]);
  }
};

pages.forEach((page) => {
  test(`Page "${page.path}" should have minimum scores for all categories`, async ({}) => {
    console.log(page.path);
    const pageUrl = `${config.use.baseURL}${page.path}`;

    const expectedScores = {
 
      accessibility: 90,
      'best-practices': 90,
      seo: 90,
      pwa: 90,
      performance: 90,
    };

    await runLighthouseAudit(pageUrl, expectedScores);
  });
});
