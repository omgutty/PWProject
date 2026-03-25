import {test, expect} from '@playwright/test';


//storing the login in storagestate 
test('login',async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("input[name='username']").fill("student");
    
    await page.locator("input[name='password']").fill("Password123");   
    await page.locator("button[id='submit']").click();

    await page.waitForURL('https://practicetestautomation.com/logged-in-successfully/');
    await page.context().storageState({path: 'loginauth/praticetestautomationlogin.json'});

});

//passing the storage state in single test 
test.use({storageState:'loginauth/praticetestautomationlogin.json'})
test("Afterlogin",async ({page})=>{
    await page.goto("https://practicetestautomation.com/logged-in-successfully/");

    await expect(page.locator(".post-title")).toContainText("Logged In Successfully");
})

//passing the storagestate file when creating a new browser context 
test("validate congratulationmessge",async ({browser})=>{

    //load saved session , no login needed 
    const context = await browser.newContext({storageState:'loginauth/praticetestautomationlogin.json'});
    const page= await context.newPage();

    //directly goes to invetory- already loggin in!
    await page.goto("https://practicetestautomation.com/logged-in-successfully/");
    await expect (page.locator("p[class=has-text-align-center]")).toContainText("Congratulations student. You successfully logged in!");

});




// async () => {
//   const browser = await playwright.firefox.launch();  // Or 'chromium' or 'webkit'.
//   // Create a new incognito browser context.
//   const context = await browser.newContext();
//   // Create a new page in a pristine context.
//   const page = await context.newPage();
//   await page.goto('https://example.com');

//   // Gracefully close up everything
//   await context.close();
//   await browser.close();