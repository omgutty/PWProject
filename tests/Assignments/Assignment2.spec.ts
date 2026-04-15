//Mouse Events, Multiple Windows, Soft & Hard Asserts, File Upload, Scroll & Hooks

/**
 * Q1. Mouse Events

URL: https://the-internet.herokuapp.com/context_menu

Task: Right-click the box with id='hot-spot' and verify the browser alert says 'You selected a context menu'.
 */

import {test, expect} from '@playwright/test';

test('test1',async  ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/context_menu');

    page.on('dialog',async (a)=>{
        //checking alert type 
       if(a.type()=='alert'){
            //printing type of alert
            console.log( a.type())
            //printing alert message
            let mesg= a.message();
            console.log(mesg);

            //if alert message is match then only we will accept
            if(mesg=='You selected a context menu'){
                await a.accept();
            }

       }
    })

    await page.locator('#hot-spot').click({button:'right'});
})

/**
 * Q2. Mouse Events

URL: https://the-internet.herokuapp.com/double_click

Task: Double-click the 'Double-Click Me To Select' button and verify the text turns blue (check class contains 'blue').
 */
test('double click and verify blue text', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/double_click');

    const button = page.locator('//button[text()="Double-Click Me To Select"]');

    // Double click
    await button.dblclick();

    // Verify class contains blue
    await expect(button).toHaveClass(/blue/);
});

/**
 * Q3. Mouse Events

URL: https://jqueryui.com/droppable/

Task: Drag the 'Draggable' element and drop it onto the 'Droppable' target inside the iframe.
 */


test('test3', async ({page})=>{
    await page.goto('https://jqueryui.com/droppable/');
    //const frame= page.frame({url:'https://jqueryui.com/resources/demos/droppable/default.html'});
    
    const frame=page.frameLocator('.demo-frame');

    const source =frame?.locator('#draggable')
    const drophere= frame?.locator('#droppable');

    await source?.dragTo(drophere);

    await  page.waitForTimeout(3000);
    await expect( frame.locator(`//p[contains(text(),'Dropped')]`)).toHaveText('Dropped!')

})

/**
 * Q4. Mouse Events

URL: https://the-internet.herokuapp.com/hover

Task: Hover over the first user image and verify the username link becomes visible.
 */

test('test4', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/hover');
    //link is not working.
});

/**
 * Q5. Mouse Events

URL: https://the-internet.herokuapp.com/context_menu

Task: Right-click using page.mouse directly (not locator.click) by getting the element bounding box first.
 */
test('test5', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/context_menu');
   
    const space= page.locator('#hot-spot');

    page.on('dialog',async (a)=>{
        //checking alert type 
       if(a.type()=='alert'){
            //printing type of alert
            console.log( a.type())
            //printing alert message
            let mesg= a.message();
            console.log(mesg);

            //if alert message is match then only we will accept
            if(mesg=='You selected a context menu'){
                await a.accept();
            }

       }
    })
    await page.mouse.click(250,250,{button:'right'});
});

/**
 * Q6. Mouse Events

URL: https://jqueryui.com/slider/

Task: Move a range slider using page.mouse.move with steps — slide the handle 100px to the right.
 */