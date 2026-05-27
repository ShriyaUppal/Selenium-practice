const {Builder, By} = require("selenium-webdriver");

async function demoTableFun()
{
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://the-internet.herokuapp.com/tables');
        
        //Task 1: Count total number of rows:
        let rows = await driver.findElements(By.xpath("//table[@id='table1']/tbody/tr"));
        console.log(`Total Rows are: ${rows.length}`);

        //Task 2: Count total number of columns.
        let columns = await driver.findElements(By.xpath("//table[@id='table1']/thead/tr/th"));
        console.log(`Total number of columns are: ${columns.length}`);

        //Print complete table data.
        let tableData = await driver.findElements(By.xpath("//table[@id='table1']/tbody/tr"));
        for(let data of tableData)
        {
            let text = await data.getText();
            console.log(text);
        }

        //Print Only email column
        let emailData = await driver.findElements(By.xpath("//table[@id='table1']/tbody/tr/td[3]"));
        for(let email of emailData)
        {
            let emails = await email.getText();
            console.log(emails);
        }
    }
    finally{
        await driver.quit();
    }
}

demoTableFun();