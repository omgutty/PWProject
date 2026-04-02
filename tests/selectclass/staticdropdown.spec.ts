import {Page, test} from '@playwright/test';

test('staticdropdownselection', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/dropdowns.html');

    await selectvaluefromdropdown(page,'Choose your preferred programming language','Java')

})




async function selectvaluefromdropdown(page:Page,dropdownvalue:string,value:string){

   
    //await page.getByText(`${dropdownvalue}`).click();
  //OR
    await page.locator(`//div[@class="select-trigger active"]//span[text()="${dropdownvalue}"]`).click();

    await page.getByText(value,{exact:true}).click();

}