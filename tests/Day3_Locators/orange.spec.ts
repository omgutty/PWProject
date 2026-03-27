import {test,expect} from '@playwright/test';

test("orangeHRM login",async ({page})=>{
    
    //open the portal , it should load in 10 seconds
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{timeout:10000});
   
    //capturing the element and assigned it to varibale
    const title= page.getByRole('heading', { name: 'Login' });
    
    //validating the variable with expected string
    await expect(title).toHaveText("Login"); 

    //identifying the username text using getby text and validate is it visible  
   // await expect(page.getByText('Username')).toBeVisible();
    await expect(page.getByText('Username', { exact: true })).toBeVisible();

    //identifying the field name inside the text box
    //username which is present in the text box is not value, it is an attribute *important *
    const usernamefield=page.getByPlaceholder('Username');
    
    //validate the placeholder string , with to have attribute value  
    await expect(usernamefield).toHaveAttribute('placeholder', 'Username');
    
    //capturing the username from page 
    const usernamedetails2=await page.getByText('Username : Admin',{exact:true}).innerText(); //capture the Username:Admin
    const usernameadmin= usernamedetails2.split(':')[1].trim(); //trim to Admin

    
    //enter the username  which is captured abve Admin
    await usernamefield.fill(usernameadmin);
   
    //validate after entering the username 
    await expect(usernamefield).toHaveValue('Admin');

    //identifying the Password text using getby text and validate is it visible  
    //await expect(page.getByText('Password')).toBeVisible();
    await expect(page.getByText('Password', { exact: true })).toBeVisible();

    //identifying the field name inside the text box of password
    //password which is present in the text box is not value, it is an attribute *important *
    const passwordfield=page.getByPlaceholder('Password');

    //validate the placeholder string , with to have attribute value  
    await expect(passwordfield).toHaveAttribute('placeholder', 'Password');


    //capturing the password from page 
     const passworddetails =await page.getByText('Password : admin123',{exact:true}).innerText();//capturing the password from web
      const password= passworddetails.split(':')[1].trim(); //trim to Admin123

    //enter the Password 
    await passwordfield.fill(password);
    //validate after entering the password, 
    await expect(passwordfield).toHaveValue('admin123');

    //click on sign in using role button and click 
    await page.getByRole('button',{name:'Login'}).click();

    //after click login, dashboard page url should be present
    expect (await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"));
})