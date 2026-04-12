import {test, chromium,firefox, webkit, Page, expect, Locator}from '@playwright/test';

test('single  window click ', async ()=>{
    const browser= await chromium.launch({channel:'chrome',headless:false});
    const admincontext=await browser.newContext();
    const page:Page = await admincontext.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); //chrome

    const links=page.locator('.orangehrm-login-footer-sm');

    let [newtab]=await Promise.all([
         page.waitForEvent('popup'),
         links.locator(`//a[contains(@href,'linked')]`).click()
    ]);

    //linked in title printing in console 
    console.log(await newtab.title());
    const linkedintitle= await newtab.title();
    expect(linkedintitle).toBe(`OrangeHRM | LinkedIn`);
    //linked in page header indetifying for assertion 
    //const linkedinpagecontent:Locator= page.locator('#ember36');
    //const popup= page.locator(`//h2[@id='base-contextual-sign-in-modal-modal-header']`);
    //expect(popup).toHaveText('Sign in to see who you already know at OrangeHRM');
    //linkedinpagecontent.toString();
    //above locator to have text and we are validating below
    //expect(linkedinpagecontent).toHaveText('OrangeHRM ');
})


//--------------------------------------------------------------------------------


export async function clickAndHandleNewWindow(
    page: Page,
    locatorToClick: string
): Promise<Page> {
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator(locatorToClick).click()
    ]);

    await newTab.waitForLoadState('domcontentloaded');

    return newTab;
}

//click on all links and go to title linked in and perform action

test('single window click', async () => {
    const browser = await chromium.launch({channel: 'chrome',headless: false});

    const admincontext = await browser.newContext();
    const page: Page = await admincontext.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const newTab = await clickAndHandleNewWindow(page,`//a[contains(@href,'linked')]`);

    console.log(await newTab.title());

    await expect(newTab).toHaveTitle('OrangeHRM | LinkedIn');
});

//-----------------------------------------------------------------------------------
