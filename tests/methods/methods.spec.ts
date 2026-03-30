import {test,expect} from '@playwright/test';

//verify the registration form 
test('test1', async ({page})=>{

    //textcontent()- capture the text single value 
    await  page.goto("https://vinothqaacademy.com/demo-site/");
    const pagetitle=await page.getByRole('heading',{name:'Registration Form'}).textContent();
    expect(pagetitle).toEqual("Registration Form");

    //all text contents()- capture the values string []
    //const gendertitle= await page.getByLabel('Gender  ').textContent();
    const gendertitle =await page.locator('.item-vfb-31').filter({hasText:'Gender  '}).textContent();
    console.log(gendertitle);









})