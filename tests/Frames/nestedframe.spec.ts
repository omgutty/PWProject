import{expect, test} from '@playwright/test';
import { url } from 'node:inspector';

test('nestedframe', async ({page})=>{
    //url 
    await page.goto('https://demoqa.com/nestedframes');

    //frame locator using direct id inside the parent fram 
    const parentframe= page.frameLocator('#frame1')
    //get the text from the parent fram 
    const parentname=parentframe.getByText('Parent frame');

    //validate the text which is present in the parent fram 
    await expect(parentname).toContainText('Parent frame');
    
    //get the text from parent frame and stroe in txt
    const txt= await parentname.innerText()
    //print the txt in terminal 
    console.log(txt);
    
    //identifying the child frames from parent frame, we have not used the parent frame which is identified above. 
    //beacuse child frame metho is only from with frame, not with frame lcoator . 
    const childfram=page.frame({url:'https://demoqa.com/sampleiframe.html'})?.childFrames();
    //const childfram=parentframe?.childFrames();

    //child frame first index 0 and captrue the text which is present in the child frame and store in variabel
    const childvalue= await childfram![0].getByText('Child Iframe').textContent();
    //print the value in child frame text
     console.log('childvalue');
     //validate the text which is from child frame 
     expect.soft(childvalue).toEqual("Child Iframe");
})