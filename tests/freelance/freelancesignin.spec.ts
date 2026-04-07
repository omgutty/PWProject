import {test,expect} from '@playwright/test';

test('freelance sign in ',async ({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator('#email1').fill('admin@email.com');
    await page.locator('#password1').fill('admin@123')
    await page.getByRole('button',{name:'Sign in'}).click();
    const loginsuccessfull=await page.locator('.welcomeMessage').textContent();
    expect(loginsuccessfull).toBeTruthy();
    await page.context().storageState({path:'freeauth/free-session.json'});

});

test.use({storageState:'freeauth/free-session.json'})
test('manager course page data',async ({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/');
    await page.locator('.nav-menu-item-manage').hover();
    await page.getByRole('link',{name:'Manage Courses'}).click();
    await expect(page.getByAltText('Manage Courses')).toBeTruthy();
})
