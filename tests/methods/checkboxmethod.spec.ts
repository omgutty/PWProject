import {test,expect, Locator} from '@playwright/test';

test('validationmethods', async ({page})=>{

    await page.goto('http://localhost:4200/pages/iot-dashboard');
    //left panner navigation
    await page.getByRole('link', { name: 'Modal & Overlays' }).click();
    await page.getByRole('link', { name: 'Toastr' }).click();

    //uncheck and check checkboxs
    //await page.getByRole('checkbox',{name:'Hide on click'}).uncheck();
    await page.getByLabel('Hide on click').uncheck({force:true}); // it is check by default we reverted
    await page.getByRole('checkbox',{name:'Prevent arising of duplicate toast'}).check({force:true}); //it is  unchecked bydefault we reverted
    await page.getByLabel('Show toast with icon').uncheck({force:true}); //it is by default checked. we reverted

    ///to uncheck all the check box  for identify all check box
    const allcheckbox= page.getByRole('checkbox');
    //await allcheckbox.all(); // locator points to the list of elements, it return array of locators
    
    //using loop with all () method which returns all locator array
    for(const ref of await allcheckbox.all()){

        //one by one with referece we are unchecking forcefully
       await ref.uncheck({force:true});
    
       // those reference value after unchecking cehck box, we are validating the  each locator not checked or not. 
       // to be checked will validate the check box is selected or not selected, we used not, 
       // becuase all ref should be not checked as we are forcefully unchecking in above line 
      //expect(  ref.uncheck).toBeTruthy();
      await expect(ref).not.toBeChecked();
      //This checks whether checkbox is actually unchecked.
    }

    //with out loop, we are checking each check box again  below 

    //identified all check boxes 
    const checkboxes = await page.getByRole('checkbox').all();

    //all() retuns array so we are using map here, 
    //array.map(()=>{})
    //map transform every element in array 
    //

    // Uncheck all checkboxes in parallel using Promise.all()
    // map() loops through each checkbox locator and applies uncheck()
    // inside map, we pass function 

    await Promise.all(
     checkboxes.map(cb => cb.check({ force: true }))

    );

     await Promise.all(
     checkboxes.map(cb => expect(cb).toBeChecked())
    );


    //same as above, instead of two promises one promise separate manner, using then not recommended i think
    Promise.all(
     checkboxes.map(cb => cb.uncheck({ force: true })))
     .then(() => { 
        return  Promise.all(checkboxes.map(cb => expect(cb).not.toBeChecked()));
    });


});

