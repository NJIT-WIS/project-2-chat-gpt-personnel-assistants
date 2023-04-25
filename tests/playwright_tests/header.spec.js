const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" should have header tags`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await checkPageHeaderTags(pageUrl);
  });
});

async function checkPageHeaderTags(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const illegalTags = ["h1", "h2", "h3", "h4", "h5", "h6", "section", "article", "aside", "nav", "header", "footer", "form", "input", "select", "textarea", "div", "p", "ul", "ol"];

  for (const tag of headingTags) {
    const headingElement = await page.$(tag);
    expect(headingElement).toBeDefined();

    // check if the tag has content
    const tagContent = await page.evaluate((tag) => tag.textContent.trim(), headingElement);
    expect(tagContent).not.toBe('');

    // check if the tag closes correctly
    const tagHtml = await page.evaluate((tag) => tag.outerHTML, headingElement);
    expect(tagHtml.endsWith(`</${tag}>`)).toBe(true);

    // check if no illegal tags are present inside the heading tag
    const illegalTag = await page.evaluate((tag, illegalTags) => {
      const illegalTag = Array.from(tag.querySelectorAll(illegalTags.join(',')));
      return illegalTag.length > 0 ? illegalTag[0].tagName : null;
    }, headingElement, illegalTags);
    expect(illegalTag).toBeNull();
  }

  await browser.close();
}