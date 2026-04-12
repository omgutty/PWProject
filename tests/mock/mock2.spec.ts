import { test, Locator,expect } from '@playwright/test';

test('drop down', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dropdown');
    const dropdown:Locator = page.locator('#country');
    const dropdownoptions:Locator= page.locator('#country option');

    //retrying all option , all text content returns array of data 
    //it automatically convert array into string and like a paragraph it will print with comma separated 
    //const dropdowndata= await dropdownoptions.allTextContents();
   // console.log('all counties '+dropdowndata);
   //created separate function to fetch the data and print 
    await printalldropdowndata(dropdownoptions);

    //in below statment we have used map, to trim the values in dropdown , 
    //This will remove unwanted spaces from every option text.
    //map() is used when you want to transform each item in the array. array.map(item => transformation)
   // const trimmed=dropdowndata.map(value=>value.trim()); 
    //console.log('all counties '+trimmed);
    
   //selecting the india value in dom is IN, so we select based on the DOM value 
    await dropdownvalidation(dropdown,'IN');
    //await dropdown.selectOption({ value: 'IN' });
    //await expect(dropdown).toHaveValue('IN');

});

async function dropdownvalidation(locator:Locator,dropdownvalue:string):Promise<void>{
    await locator.selectOption({ value: dropdownvalue });
    await expect(locator).toHaveValue(dropdownvalue);
}

async function printalldropdowndata(locator:Locator){
    const dropdowndata= await locator.allTextContents();
    console.log('All dropdown options are :  '+dropdowndata);

    //below  two lines not required it print second time of all list of drop down, including select country tag 
    const trimmed=dropdowndata.map(value=>value.trim()); 
    console.log('all drop down options wih trimmed :  '+trimmed);

}






    