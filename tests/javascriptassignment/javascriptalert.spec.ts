//Playwright — JavaScript Alerts
/**
 * URL: https://the-internet.herokuapp.com/javascript_alerts

Q16. Write a complete Playwright test that:

1.  Navigate to https://the-internet.herokuapp.com/javascript_alerts

2.  Register a dialog handler that accepts the alert

3.  Click the 'Click for JS Alert' button

4.  Assert that #result contains 'You successfully clicked an alert'
 */

import {expect, test} from '@playwright/test'

test('click for js alert',async ({page})=>{
    
    page.on('dialog',async (popalert2)=>{
        if(popalert2.type()== 'alert'){
            //pintin alert type 
            const alertmessage= popalert2.message();
            console.log(alertmessage)
            if(alertmessage=='I am a JS Alert'){
                await popalert2.accept(); 
            }
        }
    })
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    //clicking on js alert. 
    await page.getByRole('button',{name:'Click for JS Alert'}).click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
})

/**
 * URL: https://the-internet.herokuapp.com/javascript_alerts

Q17. Write a complete Playwright test that:
1.  Navigate to https://the-internet.herokuapp.com/javascript_alerts

2.  Register a dialog handler that accepts the confirm dialog (clicks OK)

3.  Click the 'Click for JS Confirm' button

4.  Assert that #result contains 'You clicked: Ok'


 */

test('click for js confirm', async ({page})=>{

    page.on('dialog',async(popalert)=>{
        //check is it a popup alert apear or not
        if( popalert.type()=='confirm'){
            //get the alert message 
            const popupmessage=popalert.message();
            console.log(popupmessage);
            if(popupmessage=='I am a JS Confirm'){
                await popalert.accept();
                await expect(page.locator('#result')).toHaveText('You clicked: Ok');
            }else{
                await popalert.dismiss();
                 await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
            }
        }
    })

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    //Click the 'Click for JS Confirm' button
    await page.getByRole('button',{name:'Click for JS Confirm'}).click();
    //await expect(page.locator('#result')).toHaveText('You clicked: Ok');
})

/**
 * URL: https://the-internet.herokuapp.com/javascript_alerts 

Q18. Write a complete Playwright test that:
1.  Navigate to https://the-internet.herokuapp.com/javascript_alerts

2.  Register a dialog handler that dismisses the confirm dialog (clicks Cancel)

3.  Click the 'Click for JS Confirm' button

4.  Assert that #result contains 'You clicked: Cancel'
 */

test('click for js confirm cancle ', async ({page})=>{

    page.on('dialog',async(popalert)=>{
        //check is it a popup alert apear or not
        if( popalert.type()=='confirm'){
            //get the alert message 
            const popupmessage=popalert.message();
            console.log(popupmessage);
            if(popupmessage=='I am a JS Confirm'){
                await popalert.dismiss();
            }
        }
    })

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    //Click the 'Click for JS Confirm' button
    await page.getByRole('button',{name:'Click for JS Confirm'}).click();

    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
})

/**
 * URL: https://the-internet.herokuapp.com/javascript_alerts

Q19. Write a complete Playwright test that:

1.  Navigate to https://the-internet.herokuapp.com/javascript_alerts

2.  Register a dialog handler that accepts the prompt with text 'Hello Playwright'

3.  Click the 'Click for JS Prompt' button

4.  Assert that #result contains 'You entered: Hello Playwright'
 */

test('click for Click for JS Prompt', async ({page})=>{ 

    page.on('dialog',async(popalert)=>{
        //check is it a popup alert apear or not
        if( popalert.type()=='prompt'){
            //get the alert message 
            const popupmessage=popalert.message();
            console.log(popupmessage);
            if(popupmessage=='I am a JS prompt'){
                await popalert.accept("Hello Playwright");
            }
        }
    })

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    //Click the 'Click for JS Confirm' button
    await page.getByRole('button',{name:'Click for JS Prompt'}).click();

    await expect(page.locator('#result')).toHaveText('You entered: Hello Playwright');
})

/**
 * URL: https://the-internet.herokuapp.com/javascript_alerts

Q20. Write a complete Playwright test that:

1.  Navigate to https://the-internet.herokuapp.com/javascript_alerts

2.  Register a dialog handler that dismisses the prompt (no text entered)

3.  Click the 'Click for JS Prompt' button

4.  Assert that #result contains 'You entered: null'
 */

test('click for Click for JS Prompt and click on cancle', async ({page})=>{ 
 
    page.on('dialog',async(popalert)=>{
        //check is it a popup alert apear or not
        if( popalert.type()=='prompt'){
            //get the alert message 
            const popupmessage=popalert.message();
            console.log(popupmessage);
            if(popupmessage=='I am a JS prompt'){
                await popalert.dismiss();
            }
        }
    })

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    //Click the 'Click for JS Confirm' button
    await page.getByRole('button',{name:'Click for JS Prompt'}).click();

    await expect(page.locator('#result')).toHaveText('You entered: null');
})