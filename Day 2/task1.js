const {Builder, By} = require('selenium-webdriver');

async function locatorPractice(){
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get("https://the-internet.herokuapp.com/login");
        let userName = await driver.findElement(By.id('username'));
        await userName.sendKeys("tomsmith");

        let password = await driver.findElement(By.id("password"));
        await password.sendKeys("SuperSecretPassword!");

        let loginBtn = await driver.findElement(By.css("button[type='submit']"));
        await loginBtn.click();

        let successMsg = await driver.findElement(By.id("flash"));
        console.log((await successMsg.getText()).replace("x", "").trim());
    }
    finally{
        await driver.quit();
    }
}

locatorPractice();
