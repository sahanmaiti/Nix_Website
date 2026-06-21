const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1280, height: 800 });
  
  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  // Create scratch dir if needed
  if (!fs.existsSync('/Users/sahan/.gemini/antigravity-cli/brain/03a5c5e7-b0d4-4f34-9ae6-2a23a1f29cc1/scratch')) {
    fs.mkdirSync('/Users/sahan/.gemini/antigravity-cli/brain/03a5c5e7-b0d4-4f34-9ae6-2a23a1f29cc1/scratch');
  }

  // Record screenshots while scrolling down
  console.log('Scrolling down fast...');
  for (let i = 0; i < 5; i++) {
    await page.evaluate(() => {
      window.scrollBy({ top: 800, behavior: 'instant' });
    });
    await page.screenshot({ path: `/Users/sahan/.gemini/antigravity-cli/brain/03a5c5e7-b0d4-4f34-9ae6-2a23a1f29cc1/scratch/scroll_down_${i}.png` });
  }

  // Scroll back up fast
  console.log('Scrolling up fast...');
  for (let i = 0; i < 5; i++) {
    await page.evaluate(() => {
      window.scrollBy({ top: -800, behavior: 'instant' });
    });
    await page.screenshot({ path: `/Users/sahan/.gemini/antigravity-cli/brain/03a5c5e7-b0d4-4f34-9ae6-2a23a1f29cc1/scratch/scroll_up_${i}.png` });
  }
  
  console.log('Done screenshots.');
  await browser.close();
})();
