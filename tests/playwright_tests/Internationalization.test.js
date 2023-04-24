async function checkPageInternationalization(pageUrl, lang, translations) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(pageUrl, { timeout: TIMEOUT });
  
    // Check the language attribute
    const htmlElement = await page.$('html');
    const langAttributeValue = await htmlElement.getAttribute('lang');
    expect(langAttributeValue).toBe(lang);
  
    // Check translated texts
    for (const translation of translations) {
      const element = await page.$(translation.selector);
      expect(element).toBeDefined();
  
      if (element) {
        const textContent = await element.textContent();
        expect(textContent).toBe(translation.text);
      }
    }
  
    await browser.close();
  }
  