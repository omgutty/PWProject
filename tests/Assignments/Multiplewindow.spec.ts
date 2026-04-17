import { allLocales } from '@faker-js/faker';
import {expect, test,chromium} from '@playwright/test';;


/**
 * Q9. Multiple Windows

URL: https://the-internet.herokuapp.com/windows

Task: Click 'Click Here', capture the new tab with context.waitForEvent('page'), and assert its title.
 */
test('test9',  async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/windows');
    let [newtab]= await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link',{name:'Click Here'}).click()
    ]);
    await expect(newtab.locator('h3')).toHaveText('New Window');
})

/**
 * Q10. Multiple Windows

URL: https://the-internet.herokuapp.com/windows

Task: Open a new tab, verify it loaded correctly, close it, and confirm you are back on the main page.
 */

test('test10',async ()=>{
    const broswer=await chromium.launch({channel:'chrome',headless:false});
    const context=await broswer.newContext();
    const page=await context.newPage();
    
    await page.goto('https://the-internet.herokuapp.com/windows');

    // context.waitForEvent('page')
    // page.getByRole('link',{name:'Click Here'}).click()

    const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Click Here' }).click()
    ]);

    // wait until new tab fully loads
    await newPage.waitForLoadState();

    // verify new tab
    await expect(newPage.locator('h3')).toHaveText('New Window');

    // close new tab
    await newPage.close();

    // bring original page to front
    await page.bringToFront();

    // verify back on main page
    await expect(page.locator('h3')).toHaveText('Opening a new window');

    await broswer.close();
    
   

})

/**
 * Q11. Multiple Windows

URL: https://the-internet.herokuapp.com/windows

Task: Use browserContext.pages() to get all open pages after clicking the link, then assert the length is 2.
 */


test('test11',async ()=>{
    const broswer=await chromium.launch({channel:'chrome',headless:false});
    const context=await broswer.newContext();
    const page=await context.newPage();
    
    await page.goto('https://the-internet.herokuapp.com/windows');

    const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Click Here' }).click()
    ]);
   

    const allpages=  context.pages(); 
     console.log(  allpages.length);//print number of pages

     expect(allpages.length).toBe(2);

});

/**
 * Q12. Multiple Windows

URL: https://the-internet.herokuapp.com/windows

Task: Open 3 tabs total, iterate context.pages(), navigate each, and collect their titles into an array.
 */

test('test12', async ()=>{
    const browser=await chromium.launch({channel:'chrome',headless:false});
    const browserContext=await browser.newContext()
    const page=await browserContext.newPage();

    await page.goto('https://the-internet.herokuapp.com/windows');

    // First popup
const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Click Here' }).click()
]);

// Second popup
const [page3] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Elemental Selenium' }).click()
]);

    
        
    const ap= browserContext.pages();
    console.log(ap.length);//total 3 tabs 
    
    
    let allpagetitle=[];

    for(const ref of ap){
        const pagetitle= await ref.title();
        allpagetitle.push(pagetitle);
    }
    console.log(allpagetitle);


    
})

/**
 * Q13. Multiple Windows

URL: https://the-internet.herokuapp.com/windows

Task: Listen to the 'page' event on context to auto-attach a handler whenever a new window opens.
 */

test('test13 - listen for new tabs using context event', async ()=>{
    const broswer=await chromium.launch({channel:'chrome',headless:false});
    const browserContext=await broswer.newContext();
    const page= await browserContext.newPage();

    // Array to store titles of all pages (including new ones)
    const allTitles: string[] = [];

    //passig the page keyword, it will consider as page or window event to open 
    // we are handling on the context level here, 
    //new page is the just string, which we are passing in function 
    browserContext.on('page',async (newpage)=>{
        console.log('New page is opened');
        //wait untill the page is loaded success fully 
        await newpage.waitForLoadState();

        //get the new page title 
        const title =await newpage.title();
        console.log('New Page Title is : ', title);
        allTitles.push(title);
    })

    //before perform any click in webpaeg, we need to handle event beofre, above we are handling with context
    await page.goto('https://the-internet.herokuapp.com/windows');

    // Click actions that open new tabs
    await page.getByRole('link', { name: 'Click Here' }).click();
    await page.getByRole('link', { name: 'Elemental Selenium' }).click();

    // Give some time for tabs to open and event to process
    await page.waitForTimeout(3000);

    // Include main page title as well
    const mainTitle = await page.title();//get main page title 
    allTitles.push(mainTitle);// push the main page title to array 

    console.log('All Titles:', allTitles);// print all pages title 

})
/**
 * Q14. Multiple Windows

URL: https://the-internet.herokuapp.com/windows

Task: Switch focus to the second tab via context.pages()[1], verify its URL, then switch back to page 0.
 */

test('test14', async ()=>{
    const broswer=await chromium.launch({channel:'chrome',headless:false});
    const browserContext=await broswer.newContext();
    const page= await browserContext.newPage();

    await page.goto('https://the-internet.herokuapp.com/windows');

     await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Click Here' }).click()
    ]);

    const allpage=browserContext.pages();
    console.log('total number of page : '+allpage.length);

    //switching to secondpage
    const secondpage=allpage[1];

    //wait untill the second page is loaded
    await secondpage.waitForLoadState()

    //verifying the title 
    const secondpagetitle =await secondpage.title();
    await expect(await secondpage.title()).toContain('New Window');

     // Verify URL
    await expect(secondpage).toHaveURL(/new/);

    //switching back to original tab
    const firstpage=allpage[0]
    await firstpage.bringToFront();

    //printing first page url
    console.log('Back to first tab URL:', firstpage.url());

    //verifying the first page url 
    await expect (firstpage).toHaveURL('https://the-internet.herokuapp.com/windows');

});

/**
 * Q15. Multiple Windows

URL: https://the-internet.herokuapp.com/windows

Task: Create a new page using browserContext.newPage(), navigate it to a URL, and verify it loaded
 */

test('test 15', async ()=>{
    const broswer=await chromium.launch({channel:'chrome',headless:false});
    const browserContext=await broswer.newContext();
   
    //first page with new context
    const page = await browserContext.newPage();
    await page.goto('https://the-internet.herokuapp.com/windows');
    const pageloaded=await page.waitForLoadState();
    // await expect(page).toBeTruthy();
    await expect(page).toHaveURL(/windows/);

    //creating new page manually 
    const page2 = await browserContext.newPage();
    await page2.goto('https://the-internet.herokuapp.com/');
    await page2.waitForLoadState();
    await expect(page2).toHaveURL('https://the-internet.herokuapp.com/');
    console.log('Page 2 Title:', await page2.title());

})