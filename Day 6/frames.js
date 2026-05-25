const {Builder, By, Key} = require('selenium-webdriver');

async function demoFrames(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://the-internet.herokuapp.com/iframe');
        let frame = await driver.findElement(By.id('mce_0_ifr'));
        await driver.switchTo().frame(frame);

        let textBox = await driver.findElement(By.id("tinymce"));
        
        await textBox.sendKeys(
            Key.CONTROL,
            'a'
        );
        await textBox.sendKeys("Hello From Selenium");
        console.log("Text Entered Successfully");

        await driver.switchTo().defaultContent();
    }
    finally{
        await driver.quit();
    }
}

demoFrames();