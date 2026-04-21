import {Page,Locator,expect}from '@playwright/test'

class Homepage{

    //defining the page declaration and passing the page in constructor 
    page: Page;
    homelink:Locator;
    headingText:Locator;
    getstartedbutton:Locator;
    searchicon:Locator;
    searchbar:Locator;
    searchheader:Locator;
    

   

    constructor(page: Page) {
    this.page = page;
    //below this will store a locator
        this.headingText= page.getByRole('heading', { name: 'Think different. Make different.' });
        this.getstartedbutton= page.locator('#get-started');
        this.homelink= page.getByRole('navigation').getByRole('link',{name:'Home'});
        this.searchicon=  page.locator(`//a[@class='zak-header-search__toggle']`).first();
        this.searchbar= page.locator('input:visible')
        this.searchheader= page.locator('.zak-page-header__title h1');
    }

   async open() {
        await this.page.goto('/');
    }

    async clickGetStarted() {
        await this.getstartedbutton.click();
    }

    async clickHome() {
        await this.homelink.click();
    }

    async searchProduct(product: string) {
        await this.searchicon.click();
        await this.searchbar.fill(product);
        await this.searchbar.press('Enter');
    }

    async expectHeading() {
        await expect(this.headingText).toHaveText('Think different. Make different.');
    }

    async expectSearchResults() {
        await expect(this.searchheader).toContainText('Search Results');
    }

}

export default Homepage;