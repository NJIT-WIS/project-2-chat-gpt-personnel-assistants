const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;

async function checkMetaTags(pageUrl, expectedTags) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const metaTags = await page.$$eval('head meta', tags =>
    tags.map(tag => ({ name: tag.getAttribute('name') || tag.getAttribute('property'), content: tag.getAttribute('content') }))
  );

  await browser.close();

  expectedTags.forEach(expectedTag => {
    const metaTag = metaTags.find(tag => tag.name === expectedTag.name);
    expect(metaTag).toBeTruthy();
    expect(metaTag.content).toEqual(expectedTag.content);
  });

  const unexpectedTags = metaTags.filter(tag => !expectedTags.find(expectedTag => expectedTag.name === tag.name));
  expect(unexpectedTags).toEqual([]);
}

pages.forEach((page) => {
  test(`Page "${page.path}" should have correct meta tags`, async ({}) => {
    console.log(page.path);
    const pageUrl = `${config.use.baseURL}${page.path}`;

    const expectedTags = page.metaTags;
    await checkMetaTags(pageUrl, expectedTags);
  });
});
