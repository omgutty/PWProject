import {test, expect } from  '@playwright/test';

//test.use({storageState:'auth/saucedemologin.json'})
test("validate invertory title ",async ({page})=>{
    await page.goto("https://www.saucedemo.com/inventory.html");
    // page.locator(".title")
    await expect(page.locator('.title')).toHaveText("Products");
})

//