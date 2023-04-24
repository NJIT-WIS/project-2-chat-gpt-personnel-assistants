const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const path = require('path');
const { execSync } = require('child_process');
const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;
pages.forEach((page) => {

  test(`Page "${page.path}" should have correct color contrast`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;

    await checkPageColorContrast(pageUrl);
  });
});

async function checkPageColorContrast(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const textElements = await page.$$('body *:not(script):not(style):not(img):not(svg)');
  for (const element of textElements) {
    const hasBgColor = await element.evaluate((el) => window.getComputedStyle(el).getPropertyValue('background-color'));
    const hasTextColor = await element.evaluate((el) => window.getComputedStyle(el).getPropertyValue('color'));

    if (hasBgColor && hasTextColor) {
      const bgColor = await element.evaluate((el) => window.getComputedStyle(el).backgroundColor);
      const textColor = await element.evaluate((el) => window.getComputedStyle(el).color);
      const contrastRatio = getColorContrast(bgColor, textColor);
      expect(contrastRatio).toBeGreaterThanOrEqual(4.5);
    }else{
      console.log("Does not exist");
    }
  }

  await browser.close();
}

function getColorContrast(bgColor, textColor) {
  const bgLuminance = getLuminance(bgColor);
  const textLuminance = getLuminance(textColor);
  const contrastRatio = (Math.max(bgLuminance, textLuminance) + 0.05) / (Math.min(bgLuminance, textLuminance) + 0.05);
  return contrastRatio;
}

function getLuminance(color) {
  // Convert color to RGB values
  const rgb = color.match(/\d+/g).map(Number);

  // Calculate relative luminance using WCAG 2.1 formula
  const [r, g, b] = rgb.map((c) => {
    const sRGB = c / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : ((sRGB + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance;
}