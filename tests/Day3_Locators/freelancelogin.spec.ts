import {test,expect} from '@playwright/test';


test('loginportal',async ({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login",{timeout:5000});

    await page.locator('#email1').fill('admin@email.com');
    await page.getByPlaceholder('Enter Password').fill('admin@123');
    await page.locator('button').filter({hasText:'Sign in'}).first().click();
    await expect(page.locator('.welcomeMessage')).toHaveText('Welcome Admin Manager to Learn Automation Courses ')


})

//https://freelance-learn-automation.vercel.app/login