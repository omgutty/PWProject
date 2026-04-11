//import playwright from '@playwright/test';
//above is default import of playwright from package, we are importing with named import named member, so we use brackets. 
//pw export neamed members so we use brackets. 

import {expect, Locator, Page, test} from '@playwright/test';


//it just open the browser and close, thats it , as we are not utilized the page fixture report will nto generate
test('test1', async ({ page }) => {})
test('test2', async ({ page }) => {})


//it will not open the tab as we have not passed the fixture , page is a run time object, we have inject into function 
//once injected into function, it call the broser, context and open the page tab.
test('test3',  async () => {

}); 

//3 tests but only 2 brosers will open . 

