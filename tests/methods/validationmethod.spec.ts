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
    await maleradio.click();

    //check box checked 

    //ischecked()- returns true if male is clicked
    console.log("male radio button clicked: "+maleradio.isChecked());

    //tobetruthy()- it pass if valu is true. 






});