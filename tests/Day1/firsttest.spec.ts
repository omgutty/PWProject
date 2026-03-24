import { test, expect } from '@playwright/test';

test('google first test', async ({ page})=> {
    await page.goto("https://www.google.com/");

})


test( 'Orange HRM first test',async ({page,browser,browserName})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle('OrangeHRM');
    
});
