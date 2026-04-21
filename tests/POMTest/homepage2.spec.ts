import{test,expect} from '@playwright/test';
import Homepage from '../../Pages/Homepage2';   

const BaseURL='https://practice.sdetunicorns.com/';;
let homepage:Homepage;

test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);
    await page.goto('BaseURL');
});

test('Home page flow', async () => {
    await homepage.expectHeading();
    await homepage.clickGetStarted();
    await homepage.clickHome();
    await homepage.searchProduct('The Best Place to Invest Your Money');
    await homepage.expectSearchResults();
});