const {Builder, By, until} = require('selenium-webdriver');

async function demoDropdown()
{
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get("https://the-internet.herokuapp.com/dropdown");
        let dropdown = await driver.findElement(By.id("dropdown"));
        console.log("Before selecting option 1");
        await dropdown.sendKeys("Option 1");

        console.log("Option 1 selected");
    }
    finally{
        await driver.quit();
    }
}

demoDropdown();