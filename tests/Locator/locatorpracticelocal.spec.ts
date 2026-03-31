import {test,expect, Locator } from '@playwright/test';;

test.only("inline form",async ({page})=>{

    await page.goto("http://localhost:4200/pages/forms/layouts");

    await page.getByRole('textbox',{name:"Jane Doe"}).fill("om");
    await page.getByPlaceholder("Jane Doe").type("gutty");

    await page.locator('nb-card').first().getByRole('textbox',{name:"Email"}).fill("om.gutty@gmail.com");

    await page.getByText("Remember me").first().click();

    await page.getByRole('button',{name:"Submit"}).filter({hasText:'Submit'}).first().click();

    //using the grid section data

    //filtering is returning locator type  
    const usingthegrid:Locator = page.locator('nb-card').filter({hasText:'Using the Grid'});
    
    await  usingthegrid.getByRole('textbox',{name:'Email'}).fill("omgutty");
    await usingthegrid.getByPlaceholder('Password').fill('omguttypassword');
    
    //clicking on radiobuttons
    //await usingthegrid.getByText('Option 1').click();
   
    //css traverse - parent tage child tag  :text-is ("text");
    await  page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 1")').click();

    await page.locator('nb-card nb-radio :text-is("Option 2")').click();

    await usingthegrid.getByText('Option 1').click();
    
    //click on signin button
    await usingthegrid.getByRole('button',{name:'Sign in'}).click();

    //validating the username which is typed below
    await expect(usingthegrid.getByPlaceholder('Email')).toHaveValue("omgutty");
    
}) 

test("Bais form",async ({page})=>{

    await page.goto("http://localhost:4200/pages/forms/layouts");
    const basicform= page.locator('nb-card').filter({hasText:'Basic form'});
    await basicform.getByRole('textbox',{name:'email'}).fill('omgutty2');
    await basicform.getByPlaceholder('Password').fill('omgutty2p');
    await basicform.getByText('Check me out').click();
    await basicform.getByRole('button',{name:"Submit"}).click();
    await expect(basicform.getByRole('textbox',{name:'email'})).toHaveValue("omgutty2");

})

//browser open and close 
// test.only("",async ({page})=>{
  
// })

test("child text",async ({page})=>{
    await page.goto("http://localhost:4200/pages/forms/layouts");

    
    await page.locator('nb-card',{hasText:'Using the Grid'}).getByRole('textbox',{name:'Email'}).fill('using the grid');
//locator chaning 
    await page.locator('nb-card',{has:page.locator('#inputEmail1')}).getByRole('textbox',{name:"Email"}).type("_omgutty");

    await page.locator('nb-card',{hasText:'Basic form'}).getByRole('textbox',{name:'Email'}).fill('basic form');

    
})





