import { Locator,expect } from '@playwright/test';

export async function multiselction(
    element: Locator,
    hobbies: string[]
): Promise<void> {
    await element.selectOption(hobbies);
}

export async function selectdropdown(
    element: Locator,
    state: string
): Promise<void> {
    await element.selectOption({ label: state });
}

export async function radiobuttonclick(
    element: Locator
): Promise<void> {
    await element.click();
}

export async function checkboxselect(
    section: Locator,
    options: string[]
): Promise<void> {
    for (const option of options) {
        const checkbox = section.getByText(option, {
            exact: true
        });

        await checkbox.click();
    }
}


export async function sendtext(
    element: Locator,
    text: string
): Promise<void> {
    await element.fill(text);
}

export async function printTableData(table: Locator):Promise<void> {
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

export async function verifythetableRCcount(tabel:Locator,row:number,col:number):Promise<void> {
    //get the columns locator of the tabel and store in variable
        const columns=tabel.locator('tbody th');
        //validate the nummber of coloum count 
        expect(await columns.count()).toBe(col);
        //get the rows locator of the tabel and store in variable 
        const rows=tabel.locator('tbody tr');
        //validate the number of rows present in the table 
        expect(await rows.count()).toBe(row);
}