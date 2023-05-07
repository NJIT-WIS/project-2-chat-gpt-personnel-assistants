const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {
  test(`Page "${page.path}" should have descriptive link text`, async () => {
    const pageUrl = `${config.use.baseURL}${page.path}`;
    await checkPageLinksHaveDescriptiveText(pageUrl);
  });
});

async function checkPageLinksHaveDescriptiveText(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  // Get all links on the page
  const links = await page.$$('a');

  const badLinkNames = [
    "click here",
    "click this",
    "go",
    "here",
    "this",
    "start",
    "right here",
    "more",
    "learn more",
    "read more"
  ];
  let i=0;
  // Check each link for descriptive text
  const errors = [];

  for (const link of links) {
    const linkText = await link.textContent();
    const linkIndex = ++i;
    console.log(linkText.trim(), " is the is many characters long ", linkText.trim().length, " and this is x pass of the loop", linkIndex);

    // Check if the link text contains any of the words from the badLinkNames array
    const hasBadLinkName = badLinkNames.some(badName => linkText.toLowerCase() === badName.toLowerCase());

    // Verify the link text is not empty and does not contain any bad words
    const hasDescriptiveText = linkText.trim().length > 0 && !hasBadLinkName;
    if (!hasDescriptiveText) {
      errors.push(`Link ${linkIndex}: "${linkText}" is not descriptive or contains bad words.`);
    }
  }

  // Fail the test if there are any errors
  expect(errors.length).toBe(0);
  if (errors.length > 0) {
    console.log(errors);
  }


  await browser.close();
}
