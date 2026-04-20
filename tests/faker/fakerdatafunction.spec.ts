import {test, expect} from '@playwright/test';
import { faker } from '@faker-js/faker';

//function creation 
function  generatesignuptestdata(){
     const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({firstName:firstName, provider: 'example.com' });
    const telephone = faker.phone.number({style:'national'});

    return {
        firstName,lastName,email,telephone
    }

}

test('faker data generation and signup', async ({ page }) => {
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');

    //call function to generate the data 
   const user=generatesignuptestdata();

    await page.locator('#input-firstname').fill(user.firstName);
    await page.locator('#input-lastname').fill(user.lastName);
    await page.locator('#input-email').fill(user.email);
    await page.locator('#input-telephone').fill(user.telephone);
    
    const password = faker.internet.password({length: 12, memorable: true, pattern: /A-Za-z0-9/,prefix: 'Auto'});
    await page.locator('#input-password').fill(password);
    await page.locator('#input-confirm').fill(password);
    
    await page.locator('input[name="agree"]').first().check();
    //click on checkbox and submit the form
    await page.locator('input[name="agree"]').check();
    await page.locator('input[type="submit"]').click();

    await page.waitForTimeout(5000);
    //console log to print generated data in console
    console.log('Generated First Name: ' + user.firstName);
    console.log('Generated Email: ' +  user.email);
    console.log('Generated Password: ' + password);

    //assertion to verify successful registration
    //await expect(page.locator('h1').nth(2)).toHaveText('Your Account Has Been Created!');
    await expect(page.getByRole('heading', { name: 'Your Account Has Been Created!' })).toBeVisible();
    await page.waitForTimeout(50000);

    //click on continue button to navigate to account page
    page.getByRole('link', { name: 'Continue' }).click();
    await page.waitForTimeout(5000);

    //assertion to verify user is navigated to account page 
   // await expect(page.locator('h2:has-text("My Account")')).toHaveText('My Account');
    

    //logout from account
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.waitForTimeout(5000);

    await page.getByTitle('My Account', { exact: true }).click();
    await page.waitForTimeout(5000);
    await page.locator('a').filter({ hasText: 'Logout' }).first().click();
    await page.waitForTimeout(5000);
    await page.getByRole('heading', { name: 'Account Logout' }).click();
     await page.waitForTimeout(5000);
    //assertion to verify user is navigated to login page after logout
});