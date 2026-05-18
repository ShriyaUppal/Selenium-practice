const {Builder, By, until} = require('selenium-webdriver');

async function fourthTest(){
    let driver = new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://github.com');
        const pageSource = await driver.getPageSource();
        console.log(pageSource.length);
    }
    finally{
        driver.quit();
    }
}

fourthTest();