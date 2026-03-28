import {test,expect, Locator } from '@playwright/test';;

test("Using the Grid parent",async ({page})=>{

    await page.goto("http://localhost:4200/pages/forms/layouts");

    //chaining the locator 

    //traversing from the parent   with has text and get by role for the field 
    await page.locator('nb-card',{hasText:'Using the Grid'}).getByRole('textbox',{name:'Email'}).fill("om.gutty");

    //travesing from the parent with has a locator with id, and getby the role 
    await page.locator('nb-card',{has:page.locator('#inputEmail1')}).getByRole('textbox',{name:'Email'}).fill("om.gutty");

});

test("Basic form parent",async ({page})=>{

    await page.goto("http://localhost:4200/pages/forms/layouts");

    //chaining the locator 

    //traversing from the parent   with has text and get by role for the field 
    await page.locator('nb-card',{hasText:'Basic form'}).getByRole('textbox',{name:'Email'}).fill("om.gutty basic form");

    //travesing from the parent with has a locator with id, and getby the role 
    await page.locator('nb-card',{has:page.locator('#exampleInputEmail1')}).getByRole('textbox',{name:'Email'}).fill("om.gutty");

});

test("inlineform parent",async ({page})=>{

    await page.goto("http://localhost:4200/pages/forms/layouts");

    await page.locator('nb-card',{hasText:'inline form'}).getByRole('textbox',{name:'Jane Doe'}).fill("inlineform parent")
    await page.locator('nb-card',{hasText:'Inline form'}).getByRole('button').click();
})
