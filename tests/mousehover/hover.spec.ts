import {test,expect} from '@playwright/test';

// test.only('mouseover', async ({page})=>{
    
//     await page.goto('https://vinothqaacademy.com/mouse-event/');

//    // await page.getByText('Demo Sites').hover();
//    // await page.getByRole('link',{name:'Demo Sites',exact:true}).hover();
//     //await page.getByText('Demo Sites').nth(1).hover();
//     const demosite = page.locator('a:has-text("Demo Sites")').nth(1);
//     const practiceautomation = page.locator('a:has-text("Practice Automation"):visible');
//     //const registration= page.locator('a:has-text("Registration Form")').first();
//     const registration = page.getByRole('link',{name:'Registration Form'})

    
//     await demosite.hover();
//     await page.pause();
//     await practiceautomation.hover();

//     await expect(registration.first()).toBeVisible();
//     await registration.first().click({force:true});



// })


// test('aboutme section verification', async ({page})=>{
    
//     await page.goto('https://vinothqaacademy.com/mouse-event/');

//     //await page.locator('a:has-text("ABOUT ME")').nth(1).hover();

//    // await page.locator('a').filter({ hasText: 'LinkedIn Profile' }).first().click();
    
//     //LOCATORS 
//     const aboutMe = page.locator('a:has-text("ABOUT ME")').nth(1);
  
//     const linkedIn = page.locator('a:has-text("LinkedIn Profile"):visible');
//     //hover 
//     await aboutMe.hover();
//     await page.pause();
//     //assert linked in is visible
//     await expect(linkedIn.first()).toBeVisible();
//     //click on linkedin link
//     await linkedIn.first().click({force:true});
// })


// test.only ('drag and drop', async ({page})=>{
//     await page.goto("https://www.qa-practice.com/elements/dragndrop/images");

//     const image=page.locator("img[src='/static/home/smile.png']");
//     const drop= page.locator('#rect-droppable2');

//     await image.dragTo(drop);


// })

test('rightclick',async ({page})=>{
    await page.goto('https://vinothqaacademy.com/mouse-event/');
    await page.locator('#rightBtn').click({button:'right'});
    const righclickoptions=await page.locator('#contextMenu button').allInnerTexts();
    const option = page.locator('#contextMenu button')
    const count = await page.locator('#contextMenu button').count();
    
    //to print texts
    console.log(righclickoptions); //print  in aray
    for(const ref of righclickoptions){
        console.log(ref); //print one by one string 
    }

   //to click on Edit  option and validate  
    await option.getByText('Edit').click();

    //after click validate the status 
    const text=await page.locator('#rightStatus').textContent();
    page.pause();
    expect(text).toContain('Edit');

    
})