const {Builder, By, until} =  require('selenium-webdriver');

async function practiceSet4()
{
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://the-internet.herokuapp.com');

        let links = await driver.findElements(By.tagName('a'));
        //console.log(links);

        for(let i=0; i<10; i++)
        {
            let text = await links[i].getText();
            console.log(text);
        }
    }
    finally{
        driver.quit();
    }
}

practiceSet4();