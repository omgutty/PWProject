import {test, expect} from '@playwright/test';

test('click on js alert', async ({page})=>{
    
    page.on('dialog',async (a)=>{
       if( a.type()=='alert'){
        const textmessage= a.message();
         console.log(a.type())
         console.log(textmessage);
            if(textmessage=='I am a JS Alert'){
            await a.accept(); 
            }
        }
    })

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.getByRole('button',{name:'Click for JS Alert'}).click();
    //once user click on this alert button, it automatically alert will capture in page on and accept 
})

test('click for js confirm', async ({page})=>{
    
    page.on('dialog',async (b)=>{
       if( b.type()=='confirm'){
        const textmessage= b.message();
        console.log(b.type())
        console.log(textmessage);
            if(textmessage=='I am a JS Confirm'){
            await b.accept(); 
            }
        }
    })

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.getByRole('button',{name:'Click for JS Confirm'}).click();
    //once user click on this alert button, it automatically alert will capture in page on and accept 
})

