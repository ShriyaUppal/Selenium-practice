const {Builder, By} = require("selenium-webdriver");

async function demoJSClick(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://demoqa.com/buttons');
        let btn = await driver.findElement(By.id('doubleClickBtn'));
        await driver.executeScript("arguments[0].click();", btn);
        console.log("Button Clicked Successfully");
    }
    finally{
        await driver.quit();
    }
}

demoJSClick();