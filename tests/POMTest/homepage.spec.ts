import{test,expect} from '@playwright/test';
import Homepage from '../../Pages/Homepage';
//import TestConfig from '../config.TestConfig'


const BaseURL='https://practice.sdetunicorns.com/';;
let homepage:Homepage;

//create object separetly for each test
test.beforeEach(async ({page})=>{
     homepage= new Homepage(page);
})

//after each test wait for 5 seconds and close the page
test.afterEach(async ({page})=>{
    await page.waitForTimeout(5000);
    await page.close();
})

test.describe('Home page test',()=>{

    test('Open Home page',async ({page})=>{

        //creating homepage consructor, so that we will use all the locators which are available in that page
        
        await page.goto(BaseURL);
       
        //validating the heading text
        expect(await homepage.gettextvalidate()).toBe('Think different. Make different.')
       
        //click on start button 
        await homepage.clickonstartbutton();

        //click on home link 
        await homepage.clickonHomeLink();

        //click on search icon 
        await homepage.clickingonsearchicon();

        //enter product name in seach and click enter 
        await homepage.enterproductNameinsearchbox('The Best Place to Invest Your Money');

        //await homepage.verifyafterseachResultHeader();
        await homepage.verifySearchResultHeader()
        

    })

    
})