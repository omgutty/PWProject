import {test} from  '@playwright/test';


test('drop down ',async ({page})=>{
    await page.goto('https://practice.expandtesting.com/dropdown');  
    
    
    // selectdropdown(page.locator('#country option'), 'india')

     
})

// export async function selectdropdown( 
//     element: Locator,
//     state: string
// ): Promise<void> {
//     await element.selectOption({ value : state }).click();;
// }