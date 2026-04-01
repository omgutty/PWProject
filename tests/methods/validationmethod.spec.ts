import {test,expect, Locator} from '@playwright/test';

test('validationmethods', async ({page})=>{

    //textcontent()- capture the text single value 
    await  page.goto("https://vinothqaacademy.com/demo-site/");

   //identifying all radio buttons
    const Genderradiobuttons= await page.locator('#item-vfb-31').locator('.vfb-span').allTextContents();
    console.log(Genderradiobuttons);
    //validate male button is available
    expect(Genderradiobuttons).toContain('Male');
    //capture the maleradio button
    const maleradio= page.locator('#item-vfb-31').locator('.vfb-span').getByRole('radio',{name:'Male',exact:true});
    //click on male radio button 
    //await maleradio.click();
   const radiobuttonlocatoraftercheck=await  maleradio.check();
    //check box checked 

    //ischecked()- returns true if male is clicked
    console.log("male radio button clicked: "+await maleradio.isChecked());

    expect(maleradio).toBeTruthy();
    //tobetruthy()- it pass if valu is true. 

    //if we want to validate the at the locator assertion 
    //expect(page.locator('#item-vfb-31').locator('.vfb-span').getByRole('radio',{name:'Male',exact:true})).toBeChecked();






});