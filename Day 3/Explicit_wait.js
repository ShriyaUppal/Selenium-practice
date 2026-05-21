const {Builder, By, until} = require('selenium-webdriver');

async function demoExplicitWait(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get("https://the-internet.herokuapp.com/dynamic_loading/1");
        let startButton = await driver.findElement(By.css('button'));
        await startButton.click();

        let helloText = await driver.findElement(By.id("finish"));

        //wait untill element is not visible
        await driver.wait(until.elementIsVisible(helloText), 10000);
        console.log(await helloText.getText());
    }finally{
        await driver.quit();
    }
}

demoExplicitWait();