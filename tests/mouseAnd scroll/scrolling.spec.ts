import {test,chromium,Page,expect} from '@playwright/test';

test("Scroll down",async ()=>{
    
    const browser = await chromium.launch({channel: 'chrome',headless: false});
    const admincontext = await browser.newContext();
    const page: Page = await admincontext.newPage()

    await page.goto('https://www.cygnet.one/');
    const ahmedabadlink=await page.locator('.accordion-content-item').first().scrollIntoViewIfNeeded();
    

    // //scrolling horrizontal and vertical 
    //  page.evaluate(()=>{

    //     window.scrollTo(0,2000);
    //     window.scrollTo(0,document.body.scrollHeight)
     

    //  })



    
})
