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


test('right  click', async ({page})=>{
    await page.goto('https://vinothqaacademy.com/mouse-event/');
   
    await page.locator('#rightBtn').click({button:'right'})

    //await page.locator('#contextMenu button').isVisible();
    expect(page.locator('#contextMenu')).toBeVisible();
    await expect(page.locator('#contextMenu button').first()).toBeVisible();
    await expect(page.locator('#contextMenu button')).toHaveCount(3);
    
})




