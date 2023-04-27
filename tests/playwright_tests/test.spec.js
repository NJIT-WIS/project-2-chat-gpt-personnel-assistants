const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
async function checkPageTitle(pageUrl, expectedTitle) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });
  const pageTitle = await page.title();
  await browser.close();
  expect(pageTitle).toBe(expectedTitle);
}

pages.forEach((page) => {

  test(`Page "${page.path}" should have the correct title`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;

    const expectedTitle = page.title;
    await checkPageTitle(pageUrl, expectedTitle);
  });
  test(`Page "${page.path}" should have meta tags present`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;


    await checkPageMetaTags(pageUrl);
  });
});


async function checkPageMetaTags(pageUrl) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(pageUrl, { timeout: TIMEOUT });
  
    const metaTags = [
      'description',
      'keywords',
      'og:title',
      'og:type',
      'og:url',
      'og:site_name',
      'twitter:card',
      'twitter:title',
      'twitter:description',
    ];
  
    for (const tag of metaTags) {
      let selector;
      console.log(tag);
      if (tag.startsWith('og:') || tag.startsWith('twitter:')) {
        selector = `head > meta[property="${tag}"]`;
      } else {
        selector = `head > meta[name="${tag}"]`;
      }
  
      const metaElement = await page.$(selector);
  
      // Check if the meta element is defined
      expect(metaElement).toBeDefined();
  
      // Check if the content of the meta element is defined
      if (metaElement) {
        const content = await metaElement.getAttribute('content');
        expect(content).toBeDefined();
        expect(content.trim().length).toBeGreaterThan(0); // Check if content is not empty
      }
    }
  
    await browser.close();
  }
  


  async function checkPageResponsive(pageUrl, checks) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
  
    const deviceSizes = [
        { name: 'Mobile', width: 375, height: 667 },
        { name: 'Tablet', width: 768, height: 1024 },
        { name: 'Desktop', width: 1280, height: 800 },
      ];
    for (const device of deviceSizes) {
      await page.setViewportSize({ width: device.width, height: device.height });
      await page.goto(pageUrl, { timeout: TIMEOUT });
  
      for (const check of checks) {
        const element = await page.$(check.selector);
        expect(element).toBeDefined();
  
        if (element) {
          const boundingBox = await element.boundingBox();
          expect(boundingBox).toBeDefined();
  
          if (boundingBox) {
            expect(boundingBox.x).toBeCloseTo(check.position[device.name].x, 1);
            expect(boundingBox.y).toBeCloseTo(check.position[device.name].y, 1);
          }
        }
      }
    }
  
    await browser.close();
  }