//https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php
import {Page, test} from '@playwright/test';

test('assignment', async ({page})=>{


    // //Q1. What is the correct syntax to select an option by label in Playwright?
    // await page.getByLabel('Show toast with icon').click();

    // //Q2. What is the correct syntax to select an option by value in Playwright?
    // await page.selectOption('#state',{value:'NCR'});

    // //Q3. What is the correct syntax to select an option by index in Playwright?
    // await page.selectOption('#state',{index:2});

    // //Q4. How many ways can you select an option using selectOption() in Playwright?
    // //value, label, index, await options.elementhandle(),['multi selection '], [{multip object },{multi object}]

    // //Q5. Which method is used to get all option texts from a dropdown in Playwright?

    // await page.locator('').allTextContents();// dom value return array 
    // await page.locator('').allInnerTexts();//visible render text

    //Q6. Which locator is used to get the currently selected option text?
    //await page.selectOption('#state',{index:2});
    //console.log(await page.locator('#state').inputValue());

    /**
     * Q7. Write the code to open this URL and select "NCR" from the State dropdown using label.
    https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php
     */

    
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    // page.selectOption('#state',{label:'NCR'});

    //Q8. Write the code to select "Rajasthan" from the State dropdown using value.
    //await page.selectOption('#state',{value:'Rajasthan'});

    //Q9. Write the code to select the 3rd option from the State dropdown using index.
    //await page.selectOption('#state',{index:2});

    //Q10. Write the code to print all available options from the State dropdown.
    // const states=await page.locator('#state option').allInnerTexts();
    // //console.log(states);
    // for(let ref of states){
    //     console.log(ref);
    //} 

    /**\
     * Q11. Write the code to select "Uttar Pradesh" from State and then select "Lucknow" from City.
     */ 
    // await page.selectOption('#state',{label:'Uttar Pradesh'});
    // await page.selectOption('#city',{label:'Lucknow'})

    
    //Q12. Write a reusable function called selectDropdown(page, dropdownText, optionLabel)
    //  and use it to select State and City.
    //await selectDropdown(page,'#state','Uttar Pradesh');
    // await  page.waitForTimeout(3000);

     //Q13. Write a loop to select all 4 states one by one and print each selected value.
    const state=  page.locator('#state');
    const stateoption= await page.locator('#state option').allInnerTexts();
    const stateoptioncount=await page.locator('#state option').count();
    for(let i=1;i<stateoptioncount;i++){
        //console.log(stateoption[i])
        await page.selectOption('#state',{label:stateoption[i]});
        //console.log(await state.textContent());
        console.log(await state.inputValue());
    }

    //Q14. What happens if you try to select an option that does not exist in the dropdown?
    //error 
    //
    
})

async function selectDropdown(page:Page,dropdownText:string,optionlable:string){
    await page.selectOption(`${dropdownText}`,{label:`${optionlable}`});
}