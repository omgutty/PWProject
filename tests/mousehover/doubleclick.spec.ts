import {test,expect} from '@playwright/test';

test('double click', async ({page})=>{
    await page.goto('https://qa-practice.netlify.app/double-click');
    await page.locator('#double-click-btn').dblclick();
    
    //OR
    //await page.locator('#double-click-btn').click({clickCount:2});

    //validation
    const message= await page.locator('#double-click-result').innerText();
    await expect( page.locator('#double-click-result')).toHaveText('Congrats, you double clicked!');

    


    

})

