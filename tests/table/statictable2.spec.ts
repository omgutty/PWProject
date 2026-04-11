import {test,expect, Locator}from '@playwright/test';


//printing all the data one by one in static table by using the for of loop 
test('static table with arraymethod',async ({page})=>{
    //Open the URL
    await page.goto('https://testautomationpractice.blogspot.com/');
    //get the table locator ans store in variable
    const statictable= page.locator("//table[@name='BookTable']");
   
    //calling the function to get the all the data from table and it print in console  
    // with out calling first implimenting for this case, later i will add 
   
   //fetching the rows 
    const rows=statictable.locator('tr');
    const rowcount= await rows.count();
    console.log('total number of rows: '+rowcount);//7

    const column= rows.locator('td');
    const columncount= await column.count();// each row have 4 columns
    console.log('total colum of all rows: '+columncount);// 24 just for learning pupose
    const signlerowcolumncount = await rows.nth(1).locator('td').count();
    console.log('total colum of single rows: '+signlerowcolumncount);//it capture only 3, single row have 4 column

    console.log('printing all the static tabel data using for of loop ');

    //rows we are calling the all method, which returns aray of each row data, 
    //when locator pointing list of elements, it return array of locators
    const allrowdata= await rows.all();

    //commit one for loop, uuse only one 
    for(let ref of allrowdata){
        //by adding th and td, it capture the header as well 
        //th is for header, td for tabel data, , if we not use th, empty arrray will print as this for loop 
        //start from first row as well.
        const coldata=await ref.locator('th , td').allInnerTexts();
        console.log(coldata);
    }   

    //if we dont want header we can slice in for loop and only pass td in locator ref 
        for(let ref of allrowdata.slice(1)){
        //by adding th and td, it capture the header as well 
        const coldata=await ref.locator('td').allInnerTexts();
        console.log(coldata);
    }   

})