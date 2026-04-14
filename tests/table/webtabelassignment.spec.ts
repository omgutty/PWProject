import {test,expect, Locator, Page} from '@playwright/test';

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
test('question 6',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/",{timeout:50000});
    const statictable= page.locator("//table[@name='BookTable']");
    const headerrow= statictable.locator('tr').first();
    const headerdata=headerrow.locator('th');
    for(let i=0;i<await headerdata.count();i++){
        console.log (await headerrow.locator('th').nth(i).textContent());
    }

})

//Q7. Print the author name of the book 'Master In Selenium'.
test('question 7',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/",{timeout:50000});
    const statictable= page.locator("//table[@name='BookTable']");
    console.log("Author name is: " + await FetchAuther(statictable,'Master In Selenium'));
})
async function FetchAuther(table:Locator,coursename:string):Promise<string|null>{
    const row = table.locator(`//tr[td[1]='${coursename}']`);
    const authorName = await row.locator('td').nth(1).textContent();
    return authorName;
}


//Q8. Check if the book 'Learn JS' exists in the table — print true or false.
test('question 8',async ({page})=>{ 
    await page.goto("https://testautomationpractice.blogspot.com/",{timeout:50000});
    const statictable= page.locator("//table[@name='BookTable']");
    const courename:string='Learn JS'
    console.log(" Book "+courename+" present in table ? " + await autherpresent(statictable,courename));
})
async function autherpresent(table:Locator,coursename:string):Promise<boolean>{
    const tabletada= table.locator(`//tr[td='${coursename}']`).isVisible()
    return tabletada;
}



//Q9. Print all books where the Subject is 'Selenium'.
//table[@name='BookTable']//tr[td[3]='Selenium']
test('question 9',async ({page})=>{ 
    await page.goto("https://testautomationpractice.blogspot.com/",{timeout:50000});
    const statictable= page.locator("//table[@name='BookTable']");
    const bookname:string='Selenium'
    //calling the function , pass page, table, and book name
    await findbooks(page, statictable,bookname);
})

async function findbooks(page:Page,table:Locator,bookname:string){
    //it find the rows which is having the selenium
    const rows = table.locator(`//tr[td[3]='${bookname}']`);
    // how many rows it found, count it 
    const count = await rows.count();
    //use for loop, to go to each row 

    for(let i=0;i<count;i++){

        const bookName = await rows.nth(i).locator('td').nth(0).textContent();
        console.log(bookName);
    }
    //table.locator(`//tr[td[3]='${bookname}']`).filter({has:page.locator()})
    //const tabletada= table.locator(`//tr[td='${coursename}']`).isVisible()
    //return tabletada;
}

//Q10. Count how many books are written by 'Amit'
test('question 10',async ({page})=>{ 
    await page.goto("https://testautomationpractice.blogspot.com/",{timeout:50000});
    const statictable= page.locator("//table[@name='BookTable']");
    const Auther:string='Amit'
    
    const totalnumberofbooksByAuther=await Findthebooksbyauther(page, statictable,Auther);
    console.log("Total number of books By Auther "+Auther+ ' is  : '+totalnumberofbooksByAuther)
})
async function Findthebooksbyauther(page:Page,statictable:Locator,Auther:string):Promise<Number>{
    //table[@name='BookTable']
    const allrowswhichauthername=statictable.locator(`//tr[td[2]='${Auther}']`);
    const totalcount= allrowswhichauthername.count(); 
    return totalcount
}

//Q11. Print the book name that has the highest price in the table.

test('question 11',async ({page})=>{ 
    await page.goto("https://testautomationpractice.blogspot.com/",{timeout:50000});
    const statictable= page.locator("//table[@name='BookTable']");
    //FindtheCostlybookname(statictable);
    const costlyBookName = await findTheCostlyBookName(statictable);

    console.log("Highest priced book is: " + costlyBookName);
    //const totalnumberofbooksByAuther=await Findthebooksbyauther(page, statictable,Auther);
    //console.log("Total number of books By Auther "+Auther+ ' is  : '+totalnumberofbooksByAuther)
})
async function findTheCostlyBookName(staticTable: Locator): Promise<string> {
    const prices = staticTable.locator('tr td:nth-child(4)');
    const priceCount = await prices.count();

    let maxPrice = 0;
    let maxRowIndex = 0;

    // loop through all prices
    for (let i = 0; i < priceCount; i++) {
        const priceText = await prices.nth(i).textContent();
        const price = Number(priceText);

        if (price > maxPrice) {
            maxPrice = price;
            maxRowIndex = i + 1; /// because data rows start after header
        }
    }

    /// +1 because tr[1] is header row
    const bookName = await staticTable
        .locator(`tr:nth-child(${maxRowIndex + 1}) td:nth-child(1)`)
        .textContent();

    return bookName ?? '';
}
