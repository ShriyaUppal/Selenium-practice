const {Builder, By} = require('selenium-webdriver');

async function demoDragDrop(){
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('https://the-internet.herokuapp.com/drag_and_drop');
        let source = driver.findElement(By.id('column-a'));
        let target = driver.findElement(By.id('column-b'));

        let actions = await driver.actions({bridge:true});
        await actions.dragAndDrop(source, target).perform();
        console.log('Drag and drop successful');
    }
    finally{
        await driver.quit();
    }
}

demoDragDrop();