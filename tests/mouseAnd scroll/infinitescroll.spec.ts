import {test} from '@playwright/test';

test('specific scroll ',async ({page})=>{

    await page.goto('https://www.cygnet.one/');
    
    //scroll by 500 pixerl vertically - Scrll By 

    await page.evaluate(()=>{
        window.scrollBy(0,500);
    })
    await page.waitForTimeout(4000);
    //scroll up by 500 pixel 
     await page.evaluate(()=>{
        window.scrollBy(0,-500);
    })

    await page.waitForTimeout(4000);

    //scropp to specific pixerl - Scroll To
    await page.evaluate(()=>{
        window.scrollTo(0,1000);
    })


})

// For infinite scroll pages (important)
// Some pages load more content only after scrolling.
// In that case, one scroll may not be enough.
 test('infinity scroll', async ({page})=>{

    await page.goto('https://www.linkedin.com/');
    
    //it store the last page height, intilly set to zero 
    let previouseheight =0;

    //loop till page is end
    while (true){

        const currentheight =await page.evaluate(()=>document.body.scrollHeight);
             //this gives the entire scrill height of the page .
            //not the visible UI heigh, scrolable height, s

            //If height has not increased, i
        if(currentheight === previouseheight) break; 

        //current heigh is added to previouse heigh value 
        previouseheight = currentheight;

        //this  will scroll te page to down and 
        await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
        });

        //wait for 2 seconds to load
        await page.waitForTimeout(2000);

       
    }
 })


