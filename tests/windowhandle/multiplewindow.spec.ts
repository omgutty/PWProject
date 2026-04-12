import {test, chromium } from '@playwright/test';

test('multiple windows', async ()=>{
    const browser=await chromium.launch({channel:'chrome',headless:false});
    const browsercontext=await browser.newContext(); // window shared cookies and etc 
    //const browsercontext=await browser.newContext({baseURL:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'});
    const page=await browsercontext.newPage(); // one signle tab 

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    console.log('master page title : '+ await page.title());

    //click on all footer links one by one. 
    // page only focus on the parent page only 
    await page.locator(`//a[contains(@href,'linkedin')]`).click() 
    
    await page.waitForTimeout(3000);

    await page.locator(`//a[contains(@href,'linkedin')]`).click() 

    await page.waitForTimeout(3000);

    await page.locator(`//a[contains(@href,'linkedin')]`).click() 

    //it retuns all the open pages.
    const allpages=  browsercontext.pages(); 
    console.log( allpages.length);// it prins 4
    
    for (let ref of allpages){
        
        console.log( await ref.title()); //child page title 
       // here we are checking the ref is not equal to parent page , if it is parent page, we will not close that tab 
        if (ref !== page) {
        await ref.close();
        }
    }


   // await page.bringToFront();
    //console.log('master page title : '+ await page.title());

})