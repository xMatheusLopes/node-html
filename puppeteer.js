const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///C:/Users/corin/Documents/Workspace/node-html/index.html', {
    waitUntil: 'networkidle2',
  });
  await page.pdf({
        path: 'teste9.pdf', 
        format: 'A4',
        printBackground: true
    });

  await browser.close();
})();