import {test,expect, Locator} from '@playwright/test';
import { text } from 'node:stream/consumers';


//textcontent()- retuns text of a single matched element as string 
//alltextcontent()- returnns string [] value of all matching nodes
//inputvalu()- to get the data string -textbox value
//innertext()- to get the visible UI text


//expect() methods
//toequal()- check complete array/object value 
//tocontain()- checks one item exist  in array/string
//tocontainequal()- check an objec or arrray elemet by  value equality 
//tohavevalue(); with locator - expect(locator).tohave('');

//keyboard intractions
//notes wirtten prss,prsssequalentially, fill, type, clear, focus, blur, keyboard.type()


//verify the registration form 
test('methos', async ({page})=>{

    //textcontent()- capture the text single value 
    await  page.goto("https://vinothqaacademy.com/demo-site/");
    const pagetitle=await page.getByRole('heading',{name:'Registration Form'}).textContent();
    expect(pagetitle).toEqual("Registration Form");

    //all text contents()- capture the values string []
    const Genderradiobuttons= await page.locator('#item-vfb-31').locator('.vfb-span').allTextContents();
    console.log(Genderradiobuttons);
    expect(Genderradiobuttons).toContain('Male');
    expect(Genderradiobuttons).toEqual(['Male','Female','Other']);
   // expect(Genderradiobuttons).toContain(['Male','Female','Other']); // will faile because it expect [ a,b,c] but receive[[a,b,c]] 
   

   //compare the text in for loop // it receive a b c
   for(const radiolabel of Genderradiobuttons ){
    console.log(radiolabel);
   }

   //enter the value and verify the entered value 
   //identify the element with locator 
   const addressfield = page.locator('#vfb-13-address');
   //fill address 1
   await addressfield.fill("address 1")
   
   //capture the entered the data using inputvalue()
   const addressentry=await addressfield.inputValue();
   //validate the entered address with assertion 
   expect(addressentry).toEqual('address 1');

   //filling the form one by one in the same field.
   //cleared the filled data 
   await addressfield.clear();

   await addressfield.pressSequentially('test@gmail.com',{delay:1000});
   await addressfield.type('hahaha'); // add after the email


})

// test("alltextcontent",async ({page})=>{
//     await page.goto("http://localhost:4200/pages/forms/layouts");


// })

