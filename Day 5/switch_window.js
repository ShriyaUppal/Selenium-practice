const {Builder, By} = require('selenium-webdriver');

async function demoSwitchWindow(){
    let driver = await new Builder().forBrowser('chrome').build();
    
    try{
        await driver.get('https://the-internet.herokuapp.com/windows');
        let currentWindow = await driver.getWindowHandle();

        let clickHere = await driver.findElement(By.linkText('Click Here'));
        await clickHere.click();

        let windows = await driver.getAllWindowHandles();
        await driver.switchTo().window(windows[1]);

        console.log(await driver.getTitle());

        await driver.switchTo().window(currentWindow);
        console.log(await driver.getTitle());
    }
    finally{
        driver.quit();
    }
}

demoSwitchWindow();