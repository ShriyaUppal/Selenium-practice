const {Builder, By} = require('selenium-webdriver');

async function demoDoubleClick(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://demoqa.com/buttons');
        let doubleBtn = await driver.findElement(By.id('doubleClickBtn'));
        let actions = await driver.actions({bridge: true});
        await actions.doubleClick(doubleBtn).perform();

        console.log('Double click performed');
    }
    finally{
        await driver.quit();
    }
}

demoDoubleClick();