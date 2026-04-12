import {test,chromium, Page } from '@playwright/test'


// test('multiple window functions', async ()=>{

//     //for launching the browser
//      const { browser, page }= await launchbrowser();
//      await page.goto('https://freelance-learn-automation.vercel.app/login');
//      const child = await openChildTab(page);

//     console.log(await child.title());

//     await browser.close();

// })

async function launchbrowser() {
    const browser= await chromium.launch({channel:'chrome',headless:false});
    const context= await browser.newContext();
    const page= await context.newPage();

    return {browser,context,page}
}

// async function openchildTab(page){    
//      const [newTab] = await Promise.all([ 
//       page.waitForEvent('popup'),
//       page.locator(`//a[contains(@href,'linkedin')]`).click()
//    ]);
//       return await newTab;
// } 