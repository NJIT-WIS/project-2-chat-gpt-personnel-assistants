const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" should have descriptive links`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;
    await checkPageDescriptiveLinks(pageUrl);
  });
});

async function checkPageDescriptiveLinks(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const links = await page.$$('a');
  for (const link of links) {
    const linkText = await link.innerText();
    expect(linkText).not.toBe('');
    expect(linkText.trim()).not.toBe(link.getAttribute('href'));
  }

  await browser.close();
}
