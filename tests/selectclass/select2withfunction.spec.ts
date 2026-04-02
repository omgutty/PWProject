 //await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");


 import {test, expect, Locator, Page} from '@playwright/test'
 
 
 test('dropdownselectusingfunction',async ({page})=>{
 
    await page.goto(('https://rahulshettyacademy.com/AutomationPractice/'));

    
   await  selectDropdownByValue(page.locator('#dropdown-class-example'),'option3')


});

async function selectDropdownByValue( element:Locator,value:string):Promise< void>{
    // await page.selectOption(element,{value:value})
    element.selectOption(value);
}