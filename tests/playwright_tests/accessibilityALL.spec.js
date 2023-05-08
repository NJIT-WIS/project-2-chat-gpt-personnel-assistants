const { test, expect } = require('@playwright/test')
const { chromium } = require('playwright')
const axeCore = require('axe-core')
const AxeBuilder = require('@axe-core/playwright').default // 1
const path = require('path')
const { execSync } = require('child_process')
const config = require(path.join(process.cwd(), 'playwright.config.js'))
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'))

const TIMEOUT = 30000
pages.forEach((page) => {
  test(`Page "${page.path}" checking all pages for any accessibility issues`, async () => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`

    await checkAccessibility(pageUrl)
  })
})

// ... existing code ...

async function checkAccessibility(pageUrl) {
  const browser = await chromium.launch()

  const context = await browser.newContext()
  // Create a new page inside context.
  const page = await context.newPage()

  // Dispose context once it's no longer needed.

  await page.goto(pageUrl, { timeout: TIMEOUT })
  // Use AxeBuilder to analyze the page for accessibility issues
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

  // Fail the test if any accessibility issues were found
  expect(accessibilityScanResults.violations).toEqual([])
  await context.close()
}
