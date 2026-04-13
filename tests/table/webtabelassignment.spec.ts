import {test,expect} from '@playwright/test';

//Q1. Open the website for static webtable and print the total number of rows in the static table 
test('print the total number of rows ',async ({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const statictable= page.locator("//table[@name='BookTable']");
    const NumberOfRowsInStaticTable=statictable.locator('tr');  
    console.log('total number of rows on static table : '+ await NumberOfRowsInStaticTable.count());
    await expect(NumberOfRowsInStaticTable).toHaveCount(7);
})

//Q2. Print the book name from the first row of the table.

test('question 2',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const statictable= page.locator("//table[@name='BookTable']");
    const NumberOfRowsInStaticTable=statictable.locator('tr'); 
    const firstrow=NumberOfRowsInStaticTable.nth(1);//first row 0 header and 1row 
    const firstrowfirstcolum=firstrow.locator('td').nth(0);//0 first colum 
    console.log(await firstrowfirstcolum.textContent());
})

//Q3. Print the price of the book in the second row
//direct apprch 
test('question 3',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/",{timeout:50000});
    const statictable= page.locator("//table[@name='BookTable']");
    const secondrow=statictable.locator('tr').nth(2);// 0 header, 1,2 second row 
    const pricecoloumofsecondrow=  secondrow.locator('td').nth(3);//second row third td to capture the price 
    console.log(await pricecoloumofsecondrow.textContent());
})

//with function , second row book name and get the price 


//Q4. Print the complete table data the rows and columns data 
test('question 4',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/",{timeout:50000});
    const statictable= page.locator("//table[@name='BookTable']");
    const row =statictable.locator('tr')
    const rowcount= await statictable.locator('tr').count();

    //looping through rows 
    for(let i=0;i<rowcount;i++){
        //const row =statictable.locator('tr')
        //console.log( await row.nth(i).textContent());
        //const colum= row.locator('td');
         const currentRow = row.nth(i); 
        const columns = currentRow.locator('td');
        //looping through each coloum 
        
        for (let j=0;j<await columns.count();j++){

            console.log(await columns.nth(j).textContent());
        }
        
    }
});

//Q5. Print all the book names from the table one by one using a loop.

test('question 5',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/",{timeout:50000});
    const statictable= page.locator("//table[@name='BookTable']");
    
    //first option
    const rows = statictable.locator('tr');
    const rowCount = await rows.count();

    for (let i = 1; i < rowCount; i++) {   // skip header row
        const bookName = await rows.nth(i).locator('td').nth(0).textContent();
        console.log(bookName);
       }

       console.log('-----------------')

    //second option
    const bookNames = page.locator("//table[@name='BookTable']//tr/td[1]");
    for (let i = 0; i < await bookNames.count(); i++) {
        console.log(await bookNames.nth(i).textContent());
    }
});

//Q6. Print all column header names of the table.
