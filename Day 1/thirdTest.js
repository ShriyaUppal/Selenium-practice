const {Builder, By, until} = require("selenium-webdriver");

async function thirdTest(){
    let driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get("https://github.com");
        console.log("Current URL is: ", await driver.getCurrentUrl());
    }
    finally{
        driver.quit();
    }
}

thirdTest();