import {test,expect} from '@playwright/test';

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


// test('selectNCR', async ({page})=>{
//     page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
//     page.getByLabel()
// })
