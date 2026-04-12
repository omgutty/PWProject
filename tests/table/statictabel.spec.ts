import {test,expect, Locator}from '@playwright/test';
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
test('fetching data',async ({page})=>{
    await  page.goto('https://testautomationpractice.blogspot.com/')
    //get the table locator ans store in variable
    const statictable= page.locator("//table[@name='BookTable']");
    //pass the header of the colum it will fetch all the column details 
    //await fetchcolumwisedata(statictable);
    const prices = await getColumnValuesByHeader(statictable,'Price');
    console.log(prices);
})



//https://chatgpt.com/c/69d3738f-92fc-83e8-852b-d9ebade08f72
export async function getColumnValuesByHeader(
    table: Locator,
    headerName: string
): Promise<string[]> {
    const headers = table.locator('tbody tr').first().locator('th');
    const rows = table.locator('tbody tr:has(td)');

    let columnIndex = -1;

    for (let i = 0; i < await headers.count(); i++) {
        const headerText = await headers.nth(i).textContent();

        if (headerText?.trim() === headerName) {
            columnIndex = i;
            break;
        }
    }

    if (columnIndex === -1) {
        throw new Error(`Header "${headerName}" not found`);
    }

    const values: string[] = [];

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const value = await row
            .locator('td')
            .nth(columnIndex)
            .textContent();

        values.push(value?.trim() || '');
    }

    return values;
}


async function fetchcolumwisedata(table:Locator):Promise<void> {
    //get the rows locator of the tabel and store in variable  
    const rows = table.locator('tbody tr');
    //skipping the header as we are starting from 1, 
    for (let i = 1; i < await rows.count(); i++) {
         //give me the current row based on the index
        const eachRow = rows.nth(i);
        //get all the columns which are having td tag  inside the each row 
        const eachColumn = eachRow.locator('td');

        //created empty array to for printing perpuse 
        // const rowData: (string | null)[] = [];
        const rowData = [];
        //this loop runs inside each row, till the total number of column, 
        for (let j = 0; j < await eachColumn.count(); j++) {
            //console.log(await eachcoloum.nth(j).textContent());
            //get the text from each cell which is present insdie the each column
            rowData.push(
                await eachColumn.nth(j).textContent()
            );
        }
         //print the array with pushed data
        console.log(rowData);
    } 
}

//helper function for get the price, by auther, 
//helper function for get the price, by bookname. 


