//Mouse Hover 
//For that we need to know Action class

const {Builder, By, until} = require('selenium-webdriver');

async function demoHover(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://the-internet.herokuapp.com/hovers');

        let image = await driver.findElement(By.css('.figure'));
        let actions = await driver.actions({bridge: true});

        await actions.move({origin: image}).perform();
        console.log('Hover Performed successfully');
    }
    finally{
        await driver.quit();
    }
}

demoHover();