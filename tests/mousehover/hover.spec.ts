import {test,expect} from '@playwright/test';

test.only('mouseover', async ({page})=>{
    
    await page.goto('https://vinothqaacademy.com/mouse-event/');

   // await page.getByText('Demo Sites').hover();
   // await page.getByRole('link',{name:'Demo Sites',exact:true}).hover();
    //await page.getByText('Demo Sites').nth(1).hover();
    const demosite = page.locator('a:has-text("Demo Sites")').nth(1);
    const practiceautomation = page.locator('a:has-text("Practice Automation"):visible');
    const registration= page.locator('a:has-text("Registration Form")').first();

    
    await demosite.hover();
    await page.pause();
    await practiceautomation.hover();

    await expect(registration.first()).toBeVisible();
    await registration.first().click({force:true});



})


test('aboutme section verification', async ({page})=>{
    
    await page.goto('https://vinothqaacademy.com/mouse-event/');

    //await page.locator('a:has-text("ABOUT ME")').nth(1).hover();

   // await page.locator('a').filter({ hasText: 'LinkedIn Profile' }).first().click();
    
    //LOCATORS 
    const aboutMe = page.locator('a:has-text("ABOUT ME")').nth(1);
  
    const linkedIn = page.locator('a:has-text("LinkedIn Profile"):visible');
    //hover 
    await aboutMe.hover();
    await page.pause();
    //assert linked in is visible
    await expect(linkedIn.first()).toBeVisible();
    //click on linkedin link
    await linkedIn.first().click({force:true});
})