//import {test, chromium,ChromiumBrowser,ChromiumBrowserContext} from '@playwright/test';

// above we are only imported chromium, what is chomumm browser, chrominu broser context ? what all these 

import {test, chromium} from '@playwright/test';

//IIFE function, it start automatically with out calling, 
// (async()=>{
//     await (await (await chromium.launch({channel:'chrome',headless:false}))
//         .newPage())
//             .goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// });




// in this test funtion , we have not injected the page fixture, 
//inside the function we have created a variable  of page ? 

test('test',async ()=>{

    //we are not injecting the fixture here, 
    // we are using the chromium import 
    // and launching the channel, in that channel, we are created direct new page, consider one context only
    const browser=await chromium.launch({channel:'chrome',headless:false});
    //calleed one new page, and called page.goto 
    const page= await browser.newPage({});
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


    
    //before clicking on the new window link, 
    // we are clicking with promise all, at the same time storing the new tab information , 
    // before clicking we are waiting for the envent here. popup , what is this popup. 
    // after click newtab data have array of tab information 
   let [newtab]= await Promise.all([
        page.waitForEvent('popup'),// what is popup heer, what are the other keywords we can pass here, 
        page.locator(`//a[contains(@href,'linkedin')]`).click() 
       
    ]);

    //wait for 4 seconds 
    await  page.waitForTimeout(4000);

    // array of tab information available in new tab, we have only one tab so ,
    //here new tab retuns a page, so we directly used page.title method
    console.log(await newtab.title());
    // page. url. to capture the url of the child page. 
    console.log(  newtab.url());
    
    //closed the child tab. 
    await newtab.close();

    //waitied for the 4 seconds, but i dont think it waited 4 seconds 
    await page.waitForTimeout(4000);

    // here we are brining to main tab, what we are brinign, here we dont have any driver, right, 
    // why to do this ?
    await page.bringToFront();
    //getting the title of the parent tab. 
    console.log('parent window title '+await page.title());


});
        
    