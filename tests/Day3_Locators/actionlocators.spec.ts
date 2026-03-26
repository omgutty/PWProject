import {test,expect} from '@playwright/test';


test("actionlocators",async ({page})=>{

   await page.goto("https://freelance-learn-automation.vercel.app/");
   await  page.getByAltText('menu').click({timeout:2000});
    //identify the image alt atribute menu and click with in 2seconds, if not clicable in 2 seconds it fail 

    await page.getByRole('button',{name:'Log in'}).click({timeout:2000});
    //identify button with name Login, and click with in 2 seconds ,

    
});