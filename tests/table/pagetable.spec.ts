import {test, expect, Locator} from '@playwright/test';

test('pagetable',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const pagenumber= page.locator('.pagination li a');

    const countofpages= await pagenumber.count();

    for(let p=0;p<countofpages;p++){

        if(p>0){
            await pagenumber.nth(p).click();
            await page.waitForTimeout(2000);
            //how to automatically instead of waiting hardcoded.
        }
        //printTableData(page.locator('#productTable'));
        const rows= page.locator('tbody tr');

        for (let i = 1; i < await rows.count(); i++) {
         //give me the current row based on the index
            const eachRow = rows.nth(i);
             const eachColumn = eachRow.locator('td');
            const rowData = [];
        
            //this loop runs inside each row, till the total number of column, 
        for (let j = 0; j < await eachColumn.count(); j++) {
            //console.log(await eachcoloum.nth(j).textContent());
            //get the text from each cell which is present insdie the each column
            rowData.push(
                await eachColumn.nth(j).textContent()
            );
        }

        } 


    } 
})

async function printTableData(table: Locator):Promise<void> {
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
