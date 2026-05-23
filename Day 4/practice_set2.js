const {Builder, By, until} = require('selenium-webdriver');

async function practiceSet2(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://the-internet.herokuapp.com/dropdown');
        let dropdown = await driver.findElement(By.id('dropdown'));

        await dropdown.sendKeys('option1');
        console.log('Option 1 is selected');
        await dropdown.sendKeys('option2');
        console.log("Option 2 is selected");
    }
    finally{
        driver.quit();
    }
}

practiceSet2();