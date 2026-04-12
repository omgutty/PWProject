import {test,expect,chromium,Page, Locator} from '@playwright/test';

test('pass the text for switch ', async ()=>{
    const browser=await chromium.launch({channel:'chrome',headless:false});
    const context=await browser.newContext();
    const page:Page=await context.newPage();


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const links=page.locator('.orangehrm-login-footer-sm');
    const linkedinpage:Page= await changetabwithstring(page,links,'linked');
    console.log(await linkedinpage.title());

    //direct link click ,which open in new tab
    const link= page.locator(`//a[contains(@href,'youtube')]`);

    //this method will not work, as wwe are not add in promise all , race function will fail and it will not print the title 

    const newpage=await newtabclick(page,link);
    const newpagetitle =await newpage.title();
    console.log("new page title is : "+newpagetitle);
    console.log('new title :'+await newpage.title());
    //expect(newpagetitle).toBe('(107) OrangeHRM Inc - YouTube');

})

//function passing the page, link of locators, text for clicking on the link
async function changetabwithstring(page:Page,link:Locator, linktext:string):Promise<Page>{

    let [newtab]=await Promise.all([
        page.waitForEvent('popup'),
        link.locator(`//a[contains(@href,'${linktext}')]`).click()
    ]);
    return newtab;
}


//it wil click but, we are not able to perform actions on the child tab, as promise will close, 
async function newtabclick(page: Page, locator: Locator): Promise<Page> {
    const newTabPromise = page.waitForEvent('popup');
    await locator.click();
    const newTab = await newTabPromise;
    return newTab;
}