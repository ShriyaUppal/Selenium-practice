const {Builder, By} = require("selenium-webdriver");

async function demoImplicitWait(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().setTimeouts({implicit: 5000});

    try{
        await driver.get("https://the-internet.herokuapp.com/login");
        let userName = await driver.findElement(By.id('username'));
        await userName.sendKeys('Test User');
    }
    finally{
        driver.quit();
    }
}

demoImplicitWait();