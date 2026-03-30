import {test,expect} from '@playwright/test';

test('test1', async ({page})=>{

    await  page.goto("https://vinothqaacademy.com/demo-site/");
    const pagetitle=await page.getByRole('heading',{name:'Registration Form'}).textContent();
    expect(pagetitle).toEqual("Registration Form");

    




})