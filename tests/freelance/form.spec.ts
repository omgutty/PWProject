import {expect, Page, test} from '@playwright/test';
//import {faker} from '@faker-js/faker';
import { TestDataGenerator } from './testData.ts';

test("signup",async ({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    // const fullName = faker.person.fullName();
    // const email = faker.internet.email();
    // const phone = faker.phone.number();

    //navigating to signup
    await page.locator('.subLink').click();
    //expect(page.waitForURL('https://freelance-learn-automation.vercel.app/signup'));
   // start from here  expect(page.waitForURL().toContain('signup');
    
    //filling the form with dynamic value
  await page.locator('#name').fill(TestDataGenerator.getName());
  await page.locator('#email').fill(TestDataGenerator.getEmail());


   // await page.locator('#name').fill(fullName);
   // await sendtext(page,'#email',email);
    await sendtext(page,'#password','admin@123');
    //selecting checkbox values- enter valid inputs
    await checkboxselect(page, ['AWS','JS']);
    
    //click radio button
    await radiobuttonclick(page,'Female');

    //selecting state in drop down 
    await selectdropdown(page,'#state','Assam')

    //multi selection Hobbies combobox 
    const hob= page.locator('#hobbies option');
    await page.locator('#hobbies').selectOption(['Reading', 'Swimming']);
    await multiselctiondropdown(page,'#hobbies',['Reading','Swimming'])

    expect( page.getByRole('button',{name:'Sign up'}).isEnabled);
    
 
})

async function multiselctiondropdown(page:Page,locator:string, hobbies:string[]):Promise<void>{
    await page.locator(`${locator}`).selectOption(hobbies);
}

async function selectdropdown(page:Page,locator:string, state:string):Promise<void>{
    await page.selectOption(locator,{label:state})
}

async function radiobuttonclick (page:Page, option:string):Promise<void> {
    await page.locator(`.genders-div input[value='${option}']`).click()
}

async function checkboxselect(page:Page, options:string[]):Promise<void>{
       const section = page.locator('.interests-div');

    for (const option of options) {
        const checkbox = section.getByText(option, { exact: true });

        await checkbox.waitFor({ state: 'visible' });
        await checkbox.click();
    }
}


async function sendtext(page:Page,locator:string,text:string):Promise<void> {
    await page.locator(locator).fill(text);
}