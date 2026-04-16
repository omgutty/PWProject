import {test,expect} from '@playwright/test';

test.beforeAll(async()=>{
    console.log('test is started ')
    
})

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

test('validate and navigate to manage course page',async ({page})=>{
    const manage=page.locator('.nav-menu-item-manage');
    await manage.hover();
    const managecourse = page.getByText('Manage Courses');
    await expect( managecourse).toHaveText('Manage Courses');
    await managecourse.click();
    await page.waitForURL('https://freelance-learn-automation.vercel.app/course/manage');
})

// test.afterEach(async({page})=>{
    
// })

test.afterAll(async () => {
   console.log('all tests are completed ');
});