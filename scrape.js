const puppeteer = require('puppeteer');

async function scrapeCorreios(cep) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://www.correios.com.br/');
    
    await page.type('#relaxation', cep);
    await page.click('#btn_pesquisar');
    
    await page.waitForSelector('.ctrlcontent');

    const result = await page.evaluate(() => {
        const data = {};
        data.logradouro = document.querySelector('.ctrlcontent .logradouro').innerText;
        data.bairro = document.querySelector('.ctrlcontent .bairro').innerText;
        data.localidade = document.querySelector('.ctrlcontent .localidade').innerText;
        data.uf = document.querySelector('.ctrlcontent .uf').innerText;
        return data;
    });
    
    await browser.close();
    return result;
}

// Testar a função
scrapeCorreios('01001000').then(console.log).catch(console.error);
