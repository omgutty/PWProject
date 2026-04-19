import {expect, test,chromium} from '@playwright/test';;

/**Q16. Soft Assert

URL: https://the-internet.herokuapp.com/login

Task: Using expect.soft(), check page title AND heading text — both checks must complete even if one fails. */

test('test16',async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login')
    await expect.soft(page.locator('.example h2')).toHaveText('Login Page');
    await expect.soft(page.locator('//title')).toHaveText('The Internet');
    await expect(page).toHaveTitle('The Internet');
    
    
})

/**
 * Q17. Soft Assert

URL: https://the-internet.herokuapp.com/login

Task: Soft assert username placeholder, password placeholder, and button text — report all 3 even if some fail.

 */

test('test17',async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login')
    
    expect.soft(await page.locator('label').filter({ hasText: 'Username' }).textContent()).toBe('Username');
    expect.soft(await page.locator('label').filter({ hasText: 'Password' }).textContent()).toBe('Password');
    expect.soft(await page.getByText('Login', { exact: true }).textContent()).toBe(' Login');
    
})

/**
 * Q18. Soft Assert

URL: https://the-internet.herokuapp.com/checkboxes

Task: Soft assert each checkbox's checked state; then log a summary of soft assertion error count.
 */

test('test18', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/checkboxes')
    //locator of check boxes 
    const checkboxes = page.locator('#checkboxes input[type="checkbox"]');
    // Soft assertions
    await expect.soft(checkboxes.nth(0)).not.toBeChecked(); // checkbox 1
    await expect.soft(checkboxes.nth(1)).toBeChecked();     // checkbox 2

    console.log('soft assertion failure',
        test.info().errors.length);
})

/**
 * Q19. Soft Assert

URL: https://the-internet.herokuapp.com/tables

Task: Soft assert that the first table's column headers include Last Name, First Name, and Email.
 */

//Task: Soft assert that the first table's column headers include Last Name, First Name, and Email.
test('test19',async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/tables');
    const table1=  page.locator('#table1').locator('.tablesorter ');
    const headers= table1.locator('th')
    console.log( await headers.count())
    const expectedHeaders = ['Last Name', 'First Name', 'Email'];
    for(let i=0;i<await headers.count();i++){
        console.log( await headers.nth(i).textContent())
    }
})


test('test19-2', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/tables');

    const table1 = page.locator('#table1');
    const headers = table1.locator('thead th');

    const expectedHeaders = [ 'Last Name', 'First Name', 'Email' ];
    const actual = [];

    // Loop through expected headers and validate
    for (let i = 0; i < expectedHeaders.length; i++) {
        const actualText = (await headers.nth(i).textContent())?.trim();

        //console.log(actualText);it print one by one
        actual.push(actualText);// this push the header string into array 
        //inside the loop, actual and expected will  compare one after one, 
        await expect.soft(actualText).toBe(expectedHeaders[i]);
    }
    //print the all the header in array 
    console.log(actual);

    //assert actual and expected with expect 
    expect(actual).toEqual(expectedHeaders);
    // Print soft assertion error count
    console.log('Soft assertion failures:', test.info().errors.length);
});


/**
 * Q20. Soft Assert

URL: https://the-internet.herokuapp.com/add_remove_elements/

Task: Add 3 elements, then soft assert each Delete button exists including a 4th (which should fail softly).
 */

test('test20', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    //click on add element three times 
    const addelement = page.getByRole('button',{name:'Add Element'})
    for(let i=0;i<=2;i++){
       await  addelement.click();
    }
    const deletebutton= page.locator(`//div[@id='elements']/button`)
    for(let i=0;i<4;i++){
    // expect.soft(  deletebutton.nth(i).toBeVisible());
     await expect.soft(deletebutton.nth(i)).toBeVisible();
    }
     // Print soft assertion error count
    console.log('Soft assertion failures:', test.info().errors.length);
})

/**
 * Q21. Hard Assert

URL: https://the-internet.herokuapp.com/login

Task: Fill credentials and hard assert the success flash message is visible after login.
 */
test('test21', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login')
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.getByRole('button', {name:' Login'}).click();
    //expect(page.locator('#flash')).toHaveText('You logged into a secure area!');
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  })

/**
 * Q22. Hard Assert

URL: https://the-internet.herokuapp.com/login

Task: Hard assert the URL contains '/secure' after a successful login — test stops immediately if this fails.


 */

test('test22', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login')
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.getByRole('button', {name:' Login'}).click();
    //expect(page.locator('#flash')).toHaveText('You logged into a secure area!');
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
    await expect(page).toHaveURL(/\/secure/);
})

/**
 * Q23. Hard Assert

URL: https://the-internet.herokuapp.com/checkboxes

Task: Check the first checkbox, hard assert it is checked (stops if fails), then assert count equals 2.
 */

test('test23', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/checkboxes')
    //locator of check boxes 
    const checkboxes = page.locator('#checkboxes input[type="checkbox"]');
    //check the first check box 
    await checkboxes.nth(0).check();
    // hard assertions verifying check box 1 is checked or not 
    await expect(checkboxes.nth(0)).toBeChecked(); // checkbox 1 is checked 

    //asserting  the count 
    //option 1
    await expect(page.locator('#checkboxes input[type="checkbox"]:checked')).toHaveCount(2);
    
    //option 2 
    let checkedCount = 0;
    for (let i = 0; i < await checkboxes.count(); i++) {
    if (await checkboxes.nth(i).isChecked()) {
        checkedCount++;
    }
    }
})

/**
 * Q24. Hard Assert

URL: https://the-internet.herokuapp.com/dynamic_loading/1

Task: Click Start, wait for the hidden element to appear, hard assert its text equals 'Hello World!'.
 */ 