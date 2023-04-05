const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;

async function checkPageMetaTags(pageUrl, expectedMetaTags) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const actualMetaTags = {};
  const metaTags = await page.$$eval('head > meta', (tags) => {
    return tags.map((tag) => ({
      name: tag.getAttribute('name') || tag.getAttribute('property'),
      content: tag.getAttribute('content'),
    }));
  });

  for (const tag of metaTags) {
    if (tag.name) {
      actualMetaTags[tag.name] = tag.content;
    }
  }

  await browser.close();
  expect(actualMetaTags).toMatchObject(expectedMetaTags);
}

pages.forEach((page) => {
  test(`Page "${page.path}" should have correct meta tags`, async ({}) => {
    const pageUrl = `${config.use.baseURL}${page.path}`;

    const expectedMetaTags = {
      'og:title': page.title,
      'og:image': 'https://og-image.vercel.app/MyWebClass.org.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg',
      'twitter:card': 'summary_large_image',
    };
    await checkPageMetaTags(pageUrl, expectedMetaTags);
  });
});
