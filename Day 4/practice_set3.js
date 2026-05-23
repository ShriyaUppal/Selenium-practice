const {Builder, By, until} = require("selenium-webdriver");

async function practiceAlerts(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://the-internet.herokuapp.com/javascript_alerts');

         let alertButton = await driver.findElement(
            By.xpath("//button[text()='Click for JS Alert']")
        );
        await alertButton.click();
        let alert = driver.switchTo().alert();
        console.log(await alert.getText());

        //accept alert
        await alert.accept();
        console.log('Alert accepted successfully');
    }
    finally{
        driver.quit();
    }
}

practiceAlerts();