import {test,chromium,Page,expect} from '@playwright/test';

test("Scroll down",async ()=>{
    
    const browser = await chromium.launch({channel: 'chrome',headless: false});
    const admincontext = await browser.newContext();
    const page: Page = await admincontext.newPage()

    await page.goto('https://www.cygnet.one/');

    //scroll to this element 
    const ahmedabadlink=await page.locator('.accordion-content-item').first().scrollIntoViewIfNeeded();
    
    //direct click auto scrolling 
    await page.locator(`//a[contains(@href,'cosmos')]`).click();

    //keyboardscrooll
    await page.keyboard.press('PageDown');
    await page.keyboard.press('End');
    

    //scrolling horrizontal and vertical 
     page.evaluate(()=>{

        window.scrollTo(0,2000);
        window.scrollTo(0,document.body.scrollHeight)
     

    
})}
);
