import {test, expect, Locator} from '@playwright/test';

test('pagetable',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const pagenumber= page.locator('.pagination li a');
    const countofpages= await pagenumber.count();
    const paginationtable= page.locator('#productTable');
    const rows =paginationtable.locator('tbody tr');
    await expect(rows).toHaveCount(5)
    const colum= paginationtable.locator('thead th');
    await expect(colum).toHaveCount(4);

    for(let p=0;p<countofpages;p++){
        if(p>0){
            await pagenumber.nth(p).click();
            await page.waitForTimeout(2000);
            //how to automatically instead of waiting hardcoded.
        } 
        for (let i = 0; i < await rows.count(); i++) {
         //give me the current row based on the index
            const eachRow = rows.nth(i);
            const eachColumn = eachRow.locator('td');
            const rowData = [];

            //this loop runs inside each row, till the total number of column, 
            for (let j = 0; j < await eachColumn.count()-1; j++) {
                //console.log(await eachcoloum.nth(j).textContent());
                //get the text from each cell which is present insdie the each column
                 rowData.push(
                 await eachColumn.nth(j).textContent()
            );
            }
        console.log(rowData);
        } 
    } 
})

