import {test,expect} from '@playwright/test';


test("actionlocators",async ({page})=>{

   await page.goto("https://freelance-learn-automation.vercel.app/",{timeout:2000});// timeout of navigation //set to 100 it will fail, 1k is 1sec
   
   await  page.getByAltText('menu').click({timeout:2000}); // action timeout   
    //identify the image alt atribute menu and click with in 2seconds, if not clicable in 2 seconds it fail 

    await page.getByRole('button',{name:'Log in'}).click({timeout:2000});
    //identify button with name Login, and click with in 2 seconds ,

    await page.getByPlaceholder('Enter Email').fill('admin@email.com');

    await expect(page.locator('.header')).toHaveText('Sign In',{timeout:2000})
    //idenfitfy the locator .header and assert the with with text , with in 2 seconds. 

    
    await expect(page.getByText('Sign In',{exact:true})).toHaveText('Sign In',{timeout:2000});
    //identify the element by using the get by text with exact match , 
    //assert that element text with to have text method, with in 2 seconds it should appear 
    //to have text have default 5 seconds, we have override with 2seconds. 

});

test("Navigation Timeout",async ({page})=>{

   await page.goto("https://freelance-learn-automation.vercel.app/",{timeout:2000});// timeout of navigation //set to 100 it will fail, 1k is 1sec
   const a=await  page.waitForNavigation();

 
});
