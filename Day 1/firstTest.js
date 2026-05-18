const {Builder, By, until } = require('selenium-webdriver');

async function firstTest(){
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://www.google.com");
        console.log(`Title is ${await driver.getTitle()}`);

    }
    finally{
        driver.quit();
    }
}

firstTest();