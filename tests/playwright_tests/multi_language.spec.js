const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" should have only 1 language`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await checkPageMultiLang(pageUrl);
  });
});

async function checkPageMultiLang(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const languages = ['en', 'es']; // Array of language codes to check for

  const hasLanguage = await page.evaluate(() => {
  // Search for elements that contain English text
  const englishSelectors = [
    'html[lang="en"]', // Look for the "lang" attribute on the <html> tag
    '[lang="en"]', // Look for elements with the "lang" attribute set to "en"
    '[class*="lang-en"]', // Look for elements with a class that contains "lang-en"
    'body:contains("English")', // Look for the string "English" within the <body> tag
    // Add other selectors as needed to match language indicators on the page
  ];

  // Check if any of the English selectors match an element on the page
  for (const selector of englishSelectors) {
    const element = document.querySelector(selector);
    if (element) {
      return true;
    }
  }

  // If no English language indicators are found, return false
  return false;
  });
  await browser.close();
}
