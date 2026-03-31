import {test, expect} from '@playwright/test';


//Not picking from the playwright config, -- nee to show this in class 
//test.use({storageState:'loginauth/praticetestautomationlogin.json'})
test("Afterlogin",async ({page})=>{
    await page.goto("https://practicetestautomation.com/logged-in-successfully/");

    await expect(page.locator(".post-title")).toContainText("Logged In Successfully");
})