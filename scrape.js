const puppeteer = require('puppeteer');

async function scrapeCorreios(cep) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://www.correios.com.br/');
    
    await page.type('#relaxation', cep);
    await page.click('#btn_pesquisar');
    
    await page.waitForSelector('.ctrlcontent');

    // falta apenas realizar a extração de info.
    
    await browser.close();
    return result;
}

// Testar a função
scrapeCorreios('01001000').then(console.log).catch(console.error);
