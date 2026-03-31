import {test,expect, Locator} from '@playwright/test';

//verify the registration form 
test('textcontent', async ({page})=>{

    //textcontent()- capture the text single value 
    await  page.goto("https://vinothqaacademy.com/demo-site/");
    const pagetitle=await page.getByRole('heading',{name:'Registration Form'}).textContent();
    expect(pagetitle).toEqual("Registration Form");

    //all text contents()- capture the values string []
    const Genderradiobuttons= await page.locator('#item-vfb-31').locator('.vfb-span').allTextContents();
    console.log(Genderradiobuttons);
    expect(Genderradiobuttons).toContain('Male');
    expect(Genderradiobuttons).toEqual(['Male','Female','Other']);
   // expect(Genderradiobuttons).toContain(['Male','Female','Other']); // will faile because it expect [ a,b,c] but receive[[a,b,c]] 
   

   //compare the text in for loop // it receive a b c
   for(const radiolabel of Genderradiobuttons ){
    console.log(radiolabel);
   }

   //enter the value and verify the entered value 
   //identify the element with locator 
   const addressfield = page.locator('#vfb-13-address');
   //fill address 1
   await addressfield.fill("address 1")
   
   //capture the entered the data using inputvalue()
   const addressentry=await addressfield.inputValue();
   //validate the entered address with assertion 
   expect(addressentry).toEqual('address 1');


})

// test("alltextcontent",async ({page})=>{
//     await page.goto("http://localhost:4200/pages/forms/layouts");


// })

