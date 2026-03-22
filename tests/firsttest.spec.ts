import { test, expect } from '@playwright/test';

test('first test', async ({ page})=> {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

})


test( 'after first test',async ({page,browser,browserName})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle('OrangeHRM');
    
});
