const {Builder, By, until} = require('selenium-webdriver');

async function demoCheckbox(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get("https://the-internet.herokuapp.com/checkboxes");
        let checkBox1 = await driver.findElement(
            By.xpath("(//input[@type='checkbox'])[1]"));

        // check if selected
        let isChecked = await checkBox1.isSelected();
        console.log(`Before click: ${isChecked}`);

        //click checkbox
        await checkBox1.click();
        console.log(`After click ${await checkBox1.isSelected()}`);
    }
    finally{
        await driver.quit();
    }
} 

demoCheckbox();