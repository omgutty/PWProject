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

test('test 6 move slider 100px to right', async ({ page }) => {
    await page.goto('https://jqueryui.com/slider/');

    const frame = page.frameLocator('.demo-frame');

    //targets the round slider button that we drag.
    const handle = frame.locator('.ui-slider-handle');

    //It returns the exact position and size of the element on the screen
    //So basically:It gives screen coordinates of the element
    //This is required because mouse actions work with coordinates, not locators.
    const box = await handle.boundingBox();
    /**
     * {
   x: 420,
   y: 300,
   width: 20,
   height: 20
}
     */

    //if box is found the coordinates it will throuw error 
    if (!box) {
        throw new Error('Slider handle not found');
    }

    //center point?
    //Why? Because we should click the center of the handle, not edge.
    //box .x will total 420 +20/2
    //so mouse goto So mouse goes exactly to center.
    const startX = box.x + box.width / 2;
    const startY = box.y + box.height / 2;

    //we are mvoing to center 
    //This moves mouse pointer to slider handle.
    await page.mouse.move(startX, startY);

    //press and hold left mouse button
    await page.mouse.down();

    //moving to 100 pizerl x access
    //430+500
    await page.mouse.move(startX + 100, startY, {
        //movement becomes smooth. if we add steps 
        steps: 10
    });

    //This releases the mouse.
    await page.mouse.up();
});

//same program with dragto 

test('test 6 move slider using dragTo', async ({ page }) => {
    await page.goto('https://jqueryui.com/slider/');

    const frame = page.frameLocator('.demo-frame');

    const handle = frame.locator('.ui-slider-handle');
    const sliderTrack = frame.locator('#slider');

    // drag handle 100px to the right
    await handle.dragTo(sliderTrack, {
        targetPosition: { x: 100, y: 10 }
    });

    await page.waitForTimeout(2000);
});

/**
 * Q7. Mouse Events

URL: https://the-internet.herokuapp.com/double_click

Task: Double-click using page.mouse.dblclick() with explicit coordinates obtained from boundingBox().
 */

test('test7', async ({page})=>{
    await page.goto('https://vinothqaacademy.com/mouse-event/');
    const butt=page.locator('#doubleBtn');
    const box=await butt.boundingBox();
   
    if (!box) {
        throw new Error('Button not found');
    }
    const x = box.x + box.width / 2;
    const y = box.y + box.height / 2;

    // double click using page mouse
    await page.mouse.dblclick(x, y);

    await page.waitForTimeout(2000);    

})
/**
 * Q8. Mouse Events

URL: https://the-internet.herokuapp.com/drag_and_drop

Task: Perform drag and drop from column A to column B and assert the column headers have swapped.
 */

test('test8',async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const a=page.locator('#column-a');
    const b=page.locator('#column-b');
    await a.dragTo(b);
    await expect(page.locator(`//div[@id='column-a']/header`)).toHaveText('B');
})