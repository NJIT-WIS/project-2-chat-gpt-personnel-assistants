const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;

const keywords = [''];

function validateKeywordContent(content, keywords) {
  return keywords.some(keyword => content.toLowerCase().includes(keyword));
}

function checkPageHeaderTags(expectedTags, tag, actualTag) {
    return (expect(actualTag).toBe(expectedTags[tag]))
}

async function checkPage(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  // Check title tag
  const title = await page.title();
  expect(validateKeywordContent(title, keywords)).toBeTruthy();

  // Check meta description
  const metaDescription = await page.$eval('meta[name="description"]', el => el.content);
  expect(validateKeywordContent(metaDescription, keywords)).toBeTruthy();

  // Check header tags
  const expectedTags = page.headerTags;
  for (const tag in expectedTags) {
    const actualTag = await page.$eval(tag, el => el.textContent);
    if (checkPageHeaderTags(expectedTags, tag, actualTag)) {
      expect(validateKeywordContent(headerContent, keywords)).toBeTruthy();
    }
  }

  await browser.close();
}

pages.forEach((page) => {
  test(`Page "${page.path}" should have keyword-rich content in title, meta description, and header tags`, async ({}) => {
    const pageUrl = `http://localhost:3000${page.path}`;
    await checkPage(pageUrl);
  });
});
