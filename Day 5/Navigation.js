const {Builder, By} = require('selenium-webdriver');

async function demoNavigation(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://google.com');
        await driver.get('https://github.com');

        await driver.navigate().back();
        await driver.navigate().forward();
        await driver.navigate().refresh();
    }
    finally{
        driver.quit();
    }
}

demoNavigation();