import {Page,Locator,expect}from '@playwright/test'

  class Homepage{

    page:Page;
    homelink:Locator;
    headingText:Locator;
    getstartedbutton:Locator;
    searchicon:Locator;
    searchbar:Locator;
    searchheader:Locator;

    //consturcor is expecting parameter of the page class
    constructor(page:Page){
        //below this will store a page instance
        this.page=page;
        
        //below this will store a locator
        this.headingText= page.getByRole('heading',{name:'Think different. Make different.'});
        this.getstartedbutton= page.locator('#get-started');
        this.homelink= page.getByRole('navigation').getByRole('link',{name:'Home'});
        this.searchicon=  page.locator(`//a[@class='zak-header-search__toggle']`).first();
        this.searchbar= page.locator('input:visible')
        this.searchheader= page.locator('.zak-page-header__title h1');
        
    }

    //verify text 
    async gettextvalidate(){//}:Promise<string|null>{
        //const gettextvalue= await this.headingText.textContent();
        await expect(this.headingText).toHaveText('Think different. Make different.');
        //return gettextvalue;
    }

    //clicking on get start button 
    async clickonstartbutton():Promise<void>{
       return  this.getstartedbutton.click()
    }

    //same as gettext validate but ??''
    async headingTestvalidate(){
        return await this.headingText.textContent()??"";
        //??''  what is the use of this 
    }

    //click searchicon 
    async clickingonsearchicon():Promise<void>{
        await this.searchicon.click();
    }

    //click on home link
    async clickonHomeLink():Promise<void>{
        await this.homelink.click();
    }
    
    //enter product in serch box 
    async enterproductNameinsearchbox(productname:string){
         await this.searchbar.fill(productname); 
         await this.searchbar.press('Enter')
    }

    //after search verifytitle 
    // async verifyafterseachResultHeader():Promise<boolean>{
    //     const searchresultheader=await this.searchheader.textContent();
    //     console.log(searchresultheader)
    //     return  searchresultheader?.includes('Search Results') ??"false";
    // }
    async verifySearchResultHeader(): Promise<boolean> {
        const text = await this.searchheader.textContent();
        //this icludes this value if not send false, direct boolean validation will be done directly
        return text?.includes('Search Results') ?? false;
    }

   
}
export default Homepage;

//calling the constructor in test like below 
//const home=new Homepage(page);