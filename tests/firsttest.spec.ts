import { test, expect } from '@playwright/test';

test('UK first test', async ({ page})=> {
    await page.goto("https://icarus.cloudamber.com/");

})


test( 'Orange HRM first test',async ({page,browser,browserName})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle('OrangeHRM');
    
});
