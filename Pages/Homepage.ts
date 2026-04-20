import {Page,Locator}from '@playwright/test'


class Homepage{

    page:Page;
    headingText:Locator;
    getstartedbutton:Locator;
    homelink:Locator;
    searchicon:Locator;

    //consturcor is expecting parameter of the page class
    constructor(page:Page){
        //below this will store a page instance
        this.page=page;
        
        //below this will store a locator
        this.headingText= page.getByRole('heading',{name:'Think different. Make different.'});
        this.getstartedbutton= page.locator('#get-started');
        this.homelink= page.getByRole('navigation').getByRole('link',{name:'Home'});
        this.searchicon=  page.locator(`//a[@class='zak-header-search__toggle']`).first();
        //this.searchicon= page.locator(``)
        
    }
}

export default Homepage;

//calling the constructor in test like below 
//const home=new Homepage(page);