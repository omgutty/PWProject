import{test,  expect} from '@playwright/test'

import * as XLSX from 'xlsx';

const xlpath='tests/data/mylogin.xlsx';
const workbook =XLSX. readFile(xlpath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const loginData: any=XLSX.utils.sheet_to_json(worksheet);

test.describe('exel multiple login',()=>{

    for (const {email, password} of loginData){

    test(`Login  with | ${email} | }`,async ({page})=>{
      await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');

      // Fill login form
      await page.locator('#input-email').fill(email);
      await page.locator('#input-password').fill(password);
      //await page.locator("input[value='Log in']").click();
      await page.locator('input.btn.btn-primary').click();

      const homepagetitle= page.getByRole('link', { name: 'Qafox.com' })
      //const logoutLink = page.locator("a[href='/logout']");
      await expect(homepagetitle).toBeVisible({ timeout: 5000 });

    })
    }
})


// loginData.forEach(({ email, password }, index) => {

//     test(`Login | ${email} | Row ${index + 1}`, async ({ page }) => {

//         await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');

//         await page.locator('#input-email').fill(email);
//         await page.locator('#input-password').fill(password);
//         await page.locator('input.btn.btn-primary').click();

//         const homepagetitle = page.getByRole('link', { name: 'Qafox.com' });
//         await expect(homepagetitle).toBeVisible();
//     });

// });