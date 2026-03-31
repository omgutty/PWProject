import {test,expect} from '@playwright/test';

//verify the registration form 
test('radiobutton', async ({page})=>{
    
    await page.goto('http://localhost:4200/pages/forms/layouts');

    await  page.getByText("Option 1").click();

    await page.locator('nb-card nb-radio :text-is("Option 2")').click();
    //parent tag child tag name : text-is ia method which identify the child with label option 1

    await page.locator("nb-card").locator('nb-radio').locator(':text-is("Option 1")').click();
    //chaining parent child and 

   // await page.getByRole('button',{name:'Sign in'}).click();//it will not work many sign in 

    await page.locator('nb-card').getByRole('button',{name:"Sign in"}).first().click();

    //it will click on the 3rd sign in button 
    await page.locator('nb-card').nth(3).getByRole('button').click();


    







})