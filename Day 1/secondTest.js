const {Builder, By, until} = require('selenium-webdriver');

async function secondTest(){
    let driver = await new Builder().forBrowser('chrome').build();
    try
    {
        await driver.get("https://www.wikipedia.org");
        console.log(`Title is ${await driver.getTitle()}`);
    }
    finally{
        driver.quit();
    }
}

secondTest();