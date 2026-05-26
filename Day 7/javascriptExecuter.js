const {Builder, By} = require('selenium-webdriver');


//Task 1: we need to open a webpage and then perform scrolls.
async function demoJavaScriptExecutor(){

    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://the-internet.herokuapp.com/infinite_scroll');
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
        console.log("Scroll performed successfully");
    }
    finally{
        await driver.quit();
    }
}

demoJavaScriptExecutor();