const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" should have correct meta tags`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;

    const expectedTitle = page.title;
    await checkPageMetaTags(pageUrl);
  });
});


async function checkPageMetaTags(pageUrl) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(pageUrl, { timeout: TIMEOUT });

    const metaTags = [
      "description",
      "keywords",
      "og:title",
      "og:description",
      "og:type",
      "og:url",
      "og:site_name",
      "og:image",
      "twitter:card",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "robots",
      "viewport",
   ];
  
    for (const tag of metaTags) {
      let selector;
      if (tag.startsWith('og:') || tag.startsWith('twitter:')) {
        selector = `head > meta[property="${tag}"]`;
      } else {
        selector = `head > meta[name="${tag}"]`;
      }
  
      const metaElement = await page.$(selector);
    
      expect(metaElement).toBeDefined();
  
    
    }
  
    await browser.close();
  }
  
  