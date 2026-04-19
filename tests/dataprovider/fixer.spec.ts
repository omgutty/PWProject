import {test as base ,expect} from '@playwright/test';

type TestData = {
    username: string;
    password: string;
};
//
const test = base.extend<{testData:TestData}>({
    testData: async ({},use)=>{
        await use({
            username:'admin@email.com',
            password:'admin@123'
        })
    }
})

test('fixer as test data ', async ({page,testData})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    await page.locator('#email1').fill(testData.username);
       await page.locator('#password1').fill(testData.password);
       await page.locator('.submit-btn').click();
       await expect(page.locator('.welcomeMessage')).toHaveText('Welcome Admin Manager to Learn Automation Courses');

})