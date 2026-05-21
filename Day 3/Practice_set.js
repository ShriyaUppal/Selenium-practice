const {Builder, By, until} = require('selenium-webdriver');

async function practiceWaitFunction(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://the-internet.herokuapp.com/dynamic_loading/1');
        
        //Wait for title to display.
        await driver.wait(until.titleContains('Internet'), 5000);
        let pageTitle = await driver.getTitle();
        console.log(pageTitle);
        
        let startBtn = await driver.findElement(By.css('button'));
        await startBtn.click();

        let helloText = await driver.findElement(By.id('finish'));
        await driver.wait(until.elementIsVisible(helloText), 10000);
        console.log(await helloText.getText());
    }
    finally{
        await driver.quit();
    }
}

practiceWaitFunction();