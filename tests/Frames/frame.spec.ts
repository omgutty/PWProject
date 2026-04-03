import {test} from '@playwright/test';
import { url } from 'node:inspector';

test("frames", async ({page})=>{
    
    await page.goto("https://vinothqaacademy.com/iframe/");

    const frame1= page.frame({url:'https://vinothqaacademy.com/webtable/'});
    const frame2= page.frame({name:'popuppage'});

    //go to frame one and identify the input field and fill omgutty
    //frame is returning frame dom or null, so while using , instead of try block we are using ?
    await frame1?.locator('#nameInput').fill('omgutty');

    //go to second frame and click on first button
   page.waitForTimeout(3000);
    await frame2?.getByRole('button').first();

    page.waitForTimeout(3000);
    await frame2?.getByRole('link',{name:'Tutorials'}).click();

})