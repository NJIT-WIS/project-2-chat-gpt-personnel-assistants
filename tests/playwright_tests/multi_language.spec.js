const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" should support languages`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await checkPageMultiLang(pageUrl);
  });
});

async function checkPageMultiLang(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const languages = ['en']; // Array of language codes to check for

  const hasLanguage = await page.evaluate((languages) => {
    const languageSelectors = languages.map(lang => (
      `html[lang="${lang}"],
      [lang="${lang}"],
      [class*="lang-${lang}"],
      body`
    )).join(',');

    const elements = document.querySelectorAll(languageSelectors);

    for (const element of elements) {
      if (element.textContent.toLowerCase().includes(languages.join('|').toLowerCase())) {
        return true;
      }
    }
    return false;
  }, languages);

  await browser.close();

  if (!hasLanguage) {
    throw new Error(`None of the specified languages (${languages.join(', ')}) were found on the page.`);
  }
}
