const {Builder, By, until} = require('selenium-webdriver');

async function practiceFunction(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://the-internet.herokuapp.com/checkboxes');
        let checkeBox1 = await driver.findElement(By.css("input[type='checkbox']"));
        let isChecked =  await checkeBox1.isSelected();

        console.log(`Before Checked ${isChecked}`);
        await checkeBox1.click();
        console.log(`After click ${await checkeBox1.isSelected()}`);
    }

    finally{
        driver.quit();
    }
}

practiceFunction();