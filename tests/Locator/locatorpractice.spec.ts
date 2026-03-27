import {test, expect} from '@playwright/test';

test("locator test",async ({page})=>{

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   //fetching the username  
   const username=  page.getByText('Username : Admin', { exact: true });
   const usernamedetails =await  username.textContent();

   console.log(usernamedetails); //printing the full text
   const usernametrimmed=usernamedetails?.split(':')[1].trim();
   console.log(usernametrimmed); //printing only the Admin

    //combining above two lines 
   const usernamedetails2=await page.getByText('Username : Admin',{exact:true}).textContent()
   const user= usernamedetails2?.split(':')[1].trim();
   
//    const username2=page.locator(".orangehrm-login-error").getByText("Username : Admin");
//    console.log(await username2.textContent());

   //spliting the username Admin

    //fetching the password 
    const passworddetails =await page.getByText('Password : admin123').textContent();
    const password= passworddetails?.split(':')[1].trim();

    console.log(password);



})