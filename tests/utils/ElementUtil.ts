import { Page,Locator,expect} from "@playwright/test";

//createing a function to find the locator  

type dynamiclocator= string |Locator;

//create class
//reusable element util class, which accepts both locaotr and selector,
export class ElementUtil{

    //delcaring a class variable as page, and its type is Page
    //this will store the browser page instence ( entire class will use one page(which is declared here) ) 
    page:Page;
    defaulttimeout:number=30000;

    //create a constructor for this classs to access the methods and variable ?

    constructor (page:Page,timeout:number){
        this.page=page;
        this.defaulttimeout=timeout;
    }

    //now creating a method 
    //locator is parameter, which is dynamic locator type, 
    //we have defined this type above, which accept string or locator 
    //this entire method return Locaotr 
    public getBylocator (locator:dynamiclocator):Locator{

        if (typeof locator=='string'){
            return this.page.locator(locator);
        }

        return locator
    }

    public async click(locator:dynamiclocator){
        await this.getBylocator(locator).click();
    }

}

