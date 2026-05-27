const {Builder, By} = require('selenium-webdriver');
const fs = require('fs');

async function demoScreenShot(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://the-internet.herokuapp.com/login?utm_source=chatgpt.com');
        let image = await driver.takeScreenshot();
        fs.writeFileSync("loginPage.png", image, "base64");
        console.log("Screenshot captured successfully");
    }
    finally{
        await driver.quit();
    }
}

demoScreenShot();