import {test, expect} from '@playwright/test';
import path from 'node:path';

test("login",async ({page})=>{
    // await page.context().storageState({path: 'auth/saucedemologin.json'});
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("secret_sauce");   
    await page.locator('#login-button').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    await page.context().storageState({path: 'auth/saucedemologin.json'});
    

})

// test.use({storageState:'auth/saucedemologin.json'})
// test("validate invertory title ",async ({page})=>{
//     await page.goto("https://www.saucedemo.com/inventory.html");
//     // page.locator(".title")
//     await expect(page.locator('.title')).toHaveText("Products");
// })
