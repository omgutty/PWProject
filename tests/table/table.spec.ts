import {expect, Locator, Page, test} from '@playwright/test';

test('Pagination Web Table',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const paginationtable= page.locator('#productTable');
    const rows =paginationtable.locator('tbody tr');
    await expect(rows).toHaveCount(5)
    const colum= paginationtable.locator('thead th');
    await expect(colum).toHaveCount(4);


    //click on check box which is having the text of Tabelt with function 
    await selectproductinpaginationtabel(rows,page,'Tablet ');
    expect(selectproductinpaginationtabel(rows,page,'Tablet ')).toBeTruthy();


    //want to get all the product details from this tabel
    for(let i =0; i<await rows.count();i++){
        const row= rows.nth(i);
        const tds= row.locator('td')
        for (let j=0;j<await tds.count()-1;j++){
            console.log(await tds.nth(j).textContent());
            //console.table(await tds.nth(j).textContent());
        }
    }

})


async function selectproductinpaginationtabel (rows:Locator ,page:Page,name:string){

    const matchedrow=rows.filter({has:page.locator('td'),hasText:name});
    await matchedrow.locator("input[type='checkbox']").check();

}


//all the prices in the tabel 
//table[@name='BookTable']//tr/td[4]

// test('static table',async ({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/');
//     const booktabel= page.locator("//table[@name='BookTable']");
//     booktabel.locator('/tr')
// });
