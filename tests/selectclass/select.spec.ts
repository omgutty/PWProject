import {test, expect} from '@playwright/test'


test('dropdownselect',async ({page})=>{

    await page.goto(('https://rahulshettyacademy.com/AutomationPractice/'));
    
    //identify the element of  drop down and select using the label 
    await page.selectOption('#dropdown-class-example',{label:'Option1'});

    //idenfity the element of drop down and select using value , we can directly right the value 
    await page.selectOption('#dropdown-class-example','Option2');

    //with index
    await page.selectOption('#dropdown-class-example',{index:3});

    //get the selected dropdown value 
    const dropdwonvalue = await page.locator('#dropdown-class-example').inputValue();

    //validating 
    expect(dropdwonvalue).toBe('option3');


});

    //await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
