import{test, expect} from '@playwright/test'
import { ElementUtil  } from './ElementUtil'

test('login',async ({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');

    //calling the constuctor with two perameter one is page, another one is timeout, 10sec override the default 
    const eleutil=new ElementUtil(page,1000);
    //by using this variable, we are able to access the metthods inside the util method. 

    //filling the email field 
    await eleutil.getBylocator('#input-email').fill('om.gutty@gmail.com');
    // const passwordlocator=page.getByPlaceholder('Password');
    //eleutil.getBylocator(passwordlocator).fill('om@123')
    await eleutil.getBylocator(page.getByPlaceholder('Password')).fill('om@123')
    //await page.locator('input.btn.btn-primary').click();
    await eleutil.click('input.btn.btn-primary')
    
    
    await page.waitForTimeout(5000);

})