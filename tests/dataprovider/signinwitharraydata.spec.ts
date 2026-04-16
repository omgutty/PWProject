import { test ,expect} from '@playwright/test';

//TYPE 1
//Object-Based Test Data
//This is the real data-driven testing concept.
const loginData = [{
    username: 'admin@email.con',
    password: 'admin@123'}];

loginData.forEach((user)=>{
    test(`login test object-based  test data ${user.username}`, async ({ page }) => {
        await page.goto('https://freelance-learn-automation.vercel.app/login');
        await page.fill('#email1', user.username);
        await page.fill('#password1', user.password);
        await page.locator('.submit-btn').click();
        await expect(page.locator('.welcomeMessage')).toHaveText('Welcome Admin Manager to Learn Automation Courses');
    });
}
)

//TYPE 2
//Array Data Provider (Multiple Test Data)
type Logindata={
    username:string,
    password:string
}

const logindata:Logindata[]=[{username:'admin@email.com', password:'admin@123'},{username:'admin2@email.com',password:'admin@1234'}];

for(const data of logindata){

    //title of the test must be dynamically handle when logindata is provided with data provider. 
test(`data from array for login ${data.username}`, async ({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    await page.locator('#email1').fill(data.username);
    await page.locator('#password1').fill(data.password);
    await page.locator('.submit-btn').click();
    await expect(page.locator('.welcomeMessage')).toHaveText('Welcome Admin Manager to Learn Automation Courses');
})
}

//TYPE 3
//Hardcoded Data (Basic Level)
test('login test hardcoded', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');

    await page.fill('#email1', 'admin@email.com');
    await page.fill('#password1', 'admin@123');
    await page.locator('.submit-btn').click();
    await expect(page.locator('.welcomeMessage')).toHaveText('Welcome Admin Manager to Learn Automation Courses');
});

//TYPE 4
//Variable-Based Test Data
test('login test with variable test data', async ({ page }) => {
    const username = 'admin@email.com';
    const password = 'admin@123';
    const confirmationmessage= 'Welcome Admin Manager to Learn Automation Courses';
    
    await page.fill('#email1', username);
    await page.fill('#password1', password);
    await page.locator('.submit-btn').click();
    await expect(page.locator('.welcomeMessage')).toHaveText(confirmationmessage);
});

