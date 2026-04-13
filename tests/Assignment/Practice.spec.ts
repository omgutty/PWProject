import {test,expect, Page} from '@playwright/test';

//Q1. What is the correct syntax to select an option by label in Playwright?
// await page.getByLabel('Show toast with icon').click();

//Q2. What is the correct syntax to select an option by value in Playwright?
//await page.getByLabel('Username').fill('omgutty');

//Q3. What is the correct syntax to select an option by index in Playwright?
//page.locator('csspath').nth(0);

//Q4. How many ways can you select an option using selectOption() in Playwright?
//by value, visible  text, index, element locator/handle, multipselection, multi object

//Q5. Which method is used to get all option texts from a dropdown in Playwright?
//Alltextcontent(), all innertext();

//Q6. Which locator is used to get the currently selected option text?
//.textcontent()-to get the text in DOM, .iputvalu(); for entered value


//Q7. Write the code to open this URL and select "NCR" from the State dropdown using label.
//https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php


test('selectNCR', async ({page})=>{
     await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    await page.selectOption('#state',{index:2});

    //Q 8 : Write the code to select "Rajasthan" from the State dropdown using value.
    await page.selectOption('#state',{value:'Rajasthan'})

    //Q9. Write the code to select the 3rd option from the State dropdown using index.
    await page.selectOption('#state',{index:3});

    //Q10. Write the code to print all available options from the State dropdown.
    const states =  await page.locator('#state option').allTextContents();

    for (const state of states) {
    console.log(state);
    }
    /**
     *  Choose State
        NCR                                                                                           
        Uttar Pradesh                                                                                 
        Haryana                                                                                       
        Rajasthan
     */



    const options = page.locator('#state option');
    const count = await options.count();

    for (let i = 1; i < count; i++) {
    console.log(await options.nth(i).innerText());
    }

       /**
     *  NCR                                                                                           
        Uttar Pradesh                                                                                 
        Haryana                                                                                       
        Rajasthan
     */

        //Q11. Write the code to select "Uttar Pradesh" from State and then select "Lucknow" from City.

     await page.selectOption('#state',{label:'Uttar Pradesh'});
     await page.selectOption('#city',{label:'Lucknow'})

     //Q12. Write a reusable function called selectDropdown(page, dropdownText, optionLabel) and use it to select State and City.
    async function selectbylable (page:Page ,locator:string,label:string):Promise<void> {
        await page.selectOption(locator,{label:label});
        
    }
   //Q13. Write a loop to select all 4 states one by one and print each selected value.
    // const options = page.locator('#state option');
    // const count = await options.count();

    // for (let i = 1; i < count; i++) {
    // console.log(await options.nth(i).innerText());
    // }

})
