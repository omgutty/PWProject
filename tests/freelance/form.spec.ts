import {expect, Page, test} from '@playwright/test';
import { TestDataGenerator } from './testData.ts';
//import {multiselctiondropdown,selectdropdown} from './functions';
import * as util from './functions';

test("signup",async ({page})=>{
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    //navigating to signup
    await page.locator('.subLink').click();
    await expect(page).toHaveURL(/signup/);
    //filling the form with dynamic value
    await page.locator('#name').fill(TestDataGenerator.getName());
    await page.locator('#email').fill(TestDataGenerator.getEmail());
    await util.sendtext(page.locator('#password'),'admin@123');
    //selecting checkbox values- enter valid inputs
    await util.checkboxselect(page.locator('.interests-div'),['AWS', 'JS']);
    //click radio button
    await util.radiobuttonclick(page.locator(".genders-div input[value='Female']"));
    //selecting state in drop down 
    await util.selectdropdown(page.locator('#state'),'Assam');
    //multi selection Hobbies combobox 
    const hob= page.locator('#hobbies option');
    //await page.locator('#hobbies').selectOption(['Reading', 'Swimming']);
    await util.multiselction(page.locator('#hobbies'),['Reading','Swimming']);
    expect( page.getByRole('button',{name:'Sign up'}).isEnabled);
})