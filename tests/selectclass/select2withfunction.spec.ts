 import {test, expect, Locator, Page} from '@playwright/test'
 
 
 test('dropdownselectusingfunction',async ({page})=>{
    await page.goto(('https://rahulshettyacademy.com/AutomationPractice/'));

    const dropdown= page.locator('#dropdown-class-example');
    await selectDropdownByValue(dropdown,'option3')
    await selectDropdownByindex(dropdown,2);
    
    //passing the pagelocator directly in method 
    await selectDropdownBylabel(page,'#dropdown-class-example','Option1');

});

//two parameters with element and value
async function selectDropdownByValue( element:Locator,value:string):Promise< void>{
    // await page.selectOption(element,{value:value})
    await element.selectOption(value);
}

//index selection with two parameter
async function selectDropdownByindex( element:Locator,indexval:number):Promise< void>{
    // await page.selectOption(element,{value:value})
    await element.selectOption({index:indexval});
}


//three parameters, including page
async function selectDropdownBylabel(page:Page,locator:string,lable:string){
    await page.selectOption(locator,{label:lable});
    //await page.selectOption('#dropdown-class-example',{label:'Option1'});
}

