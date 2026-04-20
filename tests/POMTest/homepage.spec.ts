import{test,expect} from '@playwright/test';
import Homepage from '../../Pages/Homepage';


const BaseURL='https://practice.sdetunicorns.com/';;

test.describe('Home page test',()=>{

    test('Open Home page',async ({page})=>{

        //creating homepage consructor, so that we will use all the locators which are available in that page
        const homepage= new Homepage(page);

        await page.goto(BaseURL);

        await homepage.getstartedbutton.click();


    })

    
})