//beforeAll with Browser / Context

//Used when you want browser launched once.



import { test,expect, chromium } from '@playwright/test';

let browser:any;
let context:any;
let page:any;

test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
});

test.beforeEach(async ({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator('#email1').fill('admin@email.com');
    await page.locator('#password1').fill('admin@123');
    await page.locator('.submit-btn').click();
})

test('verify success login',async ({page})=>{
    await expect(page.locator('.welcomeMessage')).toHaveText('Welcome Admin Manager to Learn Automation Courses');
    ;
})

test('verify manage options',async({page})=>{
    const manage=page.locator('.nav-menu-item-manage');
    await manage.hover();
    const options=page.locator('.nav-menu-item-hover-div a');
    console.log('Manage funciton options are  : '+await options.count())
})

//wrong 
// test.afterEach(async ({}, testInfo) => {
//     if (testInfo.status === 'failed') {
//         await page.screenshot({
//             path: `screenshots/${testInfo.title}.png`
//         });
//     }
// });

test.afterAll(async () => {
    await browser.close();
});