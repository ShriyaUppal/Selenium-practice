const {Builder, By} = require('selenium-webdriver');

async function demoFileUpload(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://the-internet.herokuapp.com/upload?utm_source=chatgpt.com');
        let fileInput = await driver.findElement(By.id('file-upload'));
        await fileInput.sendKeys('C:\\Users\\HP\\Desktop\\Selenium-Practice\\Day 8\\sample.txt');

        console.log("Submit btton find successfully");
        let submitBtn = await driver.findElement(By.id('file-submit'));
        await submitBtn.click();
        console.log("Submit button clicked successfully");

        let successText = await driver.findElement(By.tagName('h3'));
        console.log(await successText.getText());
    }
    finally{
        await driver.quit();
    }
}

demoFileUpload();