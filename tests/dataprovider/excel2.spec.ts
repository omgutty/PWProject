// npm install xlsx
import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';

// Load Excel file
//const excelPath = 'testdata/data.xlsx';
const excelPath= 'tests/data/logindata2.xlsx';
const workbook = XLSX.readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert sheet into JSON
const loginData: any = XLSX.utils.sheet_to_json(worksheet);
console.log(loginData);

// Main test
test.describe('Login data driven test',  () => {
  for (const { email, password, validity } of loginData) {

    test(`Login test with email: ${email} and password: ${password}`, async ({ page }) => {

      await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');

      // Fill login form
      await page.locator('#input-email').fill(email);
      await page.locator('#input-password').fill(password);
      //await page.locator("input[value='Log in']").click();
      await page.locator('input.btn.btn-primary').click();

      if (validity.toLowerCase() === 'valid') {
        // Successful login check
        const homepagetitle= page.getByRole('link', { name: 'Qafox.com' })
        //const logoutLink = page.locator("a[href='/logout']");
        await expect(homepagetitle).toBeVisible({ timeout: 5000 });

      } else {
        // Error message validation
        const errormessage= page.getByText('Warning: No match for E-Mail Address and/or Password.', { exact: true })
        //const errorMessage = page.locator('.validation-summary-errors');
        await expect(errormessage).toBeVisible({ timeout: 5000 });

        // Still on login page
       // await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
         await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/login');
        
      }
    });
  }
});