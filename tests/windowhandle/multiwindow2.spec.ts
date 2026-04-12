//multi window useing base url in broswer contest 


import {test,chromium} from '@playwright/test';


//this is wrong , will check later 

test('multiwindow base url', async ()=>{
    const browser=await chromium.launch({channel:'chrome',headless:false,args:['--start-maximized']});
    const browsercontext=await browser.newContext({baseURL:'https://freelance-learn-automation.vercel.app/login'}); 
    const page=await browsercontext.newPage(); 
    await page.locator(`//div[@class='social']//a[contains(@href,'youtube')]`).click();


})