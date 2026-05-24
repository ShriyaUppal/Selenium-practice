const {Builder, By, until, Key} = require("selenium-webdriver");

async function demoSendKeys(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://www.google.com/');
        let searchElement = await driver.findElement(By.name("q"));
        await searchElement.sendKeys('Hello', Key.ENTER);

        console.log("Searched Successfully");
    }

    finally{
        await driver.quit();
    }
}

demoSendKeys();