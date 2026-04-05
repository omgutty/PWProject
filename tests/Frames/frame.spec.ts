import {test} from '@playwright/test';
//import { url } from 'node:inspector';

test("frames", async ({page})=>{
    
    await page.goto("https://vinothqaacademy.com/iframe/");

    const frame1= page.frame({url:'https://vinothqaacademy.com/webtable/'});
    

    //go to frame one and identify the input field and fill omgutty
    //frame is returning frame dom or null, so while using , instead of try block we are using ?
    await frame1?.locator('#nameInput').fill('omgutty');

    //go to second frame and click on first button
    
    //const frame3= page.frameLocator('https://vinothqaacademy.com/demo-site/');
     const frame3 = page.frameLocator('iframe[name="registeruser"]');

    await frame3.locator('#vfb-5').fill('Om');
  
   

   

})