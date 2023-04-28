const { test, expect } = require('@playwright/test')
const { chromium } = require('playwright')
const axeCore = require('axe-core')
const path = require('path')
const { execSync } = require('child_process')
const config = require(path.join(process.cwd(), 'playwright.config.js'))
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'))

const TIMEOUT = 30000
const rules = ['image-alt', 'label', 'html-has-lang', 'document-title']
pages.forEach((page) => {
  rules.forEach((rule) => {
    test(`Page "${page.path}" should have "${rule}"`, async ({}) => {
      console.log(page.path)
      const pageUrl = `${config.use.baseURL}${page.path}`

      await runAxeTest(pageUrl, rule)
    });
  });
});

async function runAxeTest(pageUrl, rule) {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto(pageUrl, { timeout: TIMEOUT })

  // Inject axe-core into the page
  const axeSource = axeCore.source
  await page.evaluate(axeSource)

  // Analyze the page for accessibility issues
  const violations = await page.evaluate((rule) => {
    // Run axe analysis for the specified rule
    return new Promise((resolve) => {
      const options = { runOnly: [rule] };
      axe.run(document, options, (err, results) => {
        if (err) throw err;
        resolve(results.violations);
      });
    });
  }, rule);

  // Fail the test if any accessibility issues were found
  if (violations.length > 0) {
    console.error(violations, 'Accessibility issues found')
    throw new Error('Accessibility issues found')
  }

  // ... existing code ...

  await browser.close()
}
