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