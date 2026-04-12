import {test,chromium,Page,expect} from '@playwright/test';

test("multiple window function",async ()=>{

    const browser = await chromium.launch({channel: 'chrome',headless: false});
    
        const admincontext = await browser.newContext();
        const page: Page = await admincontext.newPage();
    
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const links=page.locator('.orangehrm-login-footer-sm');
        links.locator(`//a[contains(@href,'linked')]`).click()
        await page.waitForTimeout(3000);
        links.locator(`//a[contains(@href,'face')]`).click();
        await page.waitForTimeout(3000);
        links.locator(`//a[contains(@href,'twitter')]`).click();
        await page.waitForTimeout(3000);
        links.locator(`//a[contains(@href,'youtube')]`).click();
        await page.waitForTimeout(3000);

        //to return all open pages. 
        const allpages = admincontext.pages();
        console.log('total numberof pages opened : '+allpages.length)

        let linkedInPage: Page | undefined;

         for (let ref of allpages){
              
            if(await ref.title()=='OrangeHRM | LinkedIn'){
                 linkedInPage = ref;
            break;
            } 
        }

        // switch to matched tab
    if (linkedInPage) {
        await linkedInPage.bringToFront();

        console.log('Switched to LinkedIn tab');

        // perform actions here
        await expect(linkedInPage).toHaveTitle('OrangeHRM | LinkedIn');

        // sample action
        console.log(await linkedInPage.url());
    } else {
        throw new Error('LinkedIn tab not found');
    }


})

//-------------------------------------------------------------------------------------


