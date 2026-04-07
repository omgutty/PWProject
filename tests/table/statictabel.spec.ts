import {test,expect}from '@playwright/test';
//import * as util from './functions';
import * as util from '../freelance/functions';


test('verify the rows and colum count ', async ({page})=>{
    //Open the URL
    await page.goto('https://testautomationpractice.blogspot.com/');
    //get the table locator ans store in variable
    const statictable= page.locator("//table[@name='BookTable']");
    //this method, will  validate that table row and col counts
    await util.verifythetableRCcount(statictable,7,4);
})

//priting all the data one by one in static tabel 
test('static table',async ({page})=>{
    //Open the URL
    await page.goto('https://testautomationpractice.blogspot.com/');
    //get the table locator ans store in variable
    const statictable= page.locator("//table[@name='BookTable']");
    //calling the function to get the all the data from table and it print in console  
    await util.printTableData(statictable);

})

//pass the colum header, it wil fetch all the list and print 
test('fetch colum wise detail',async ({page})=>{
    await  page.goto('https://testautomationpractice.blogspot.com/')
    //get the table locator ans store in variable
    const statictable= page.locator("//table[@name='BookTable']");
    //pass the header of the colum it will fetch all the column details 
    

})

