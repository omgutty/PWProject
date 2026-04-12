import {test, chromium,firefox, webkit, Page}from '@playwright/test';

test('multi window', async ()=>{

   
    const browser= await chromium.launch({channel:'chrome',headless:false});
    const admincontext=await browser.newContext();
    const page:Page = await admincontext.newPage();


    // const browser2= await chromium.launch({channel:'firfox',headless:true});
    // const normalusecontext=await browser2.newContext(); 
    // const page2:Page = await normalusecontext.newPage();


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); //chrome
    // await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');// firefox

   

})
