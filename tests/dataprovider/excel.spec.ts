//Excel Data Provider
// librarie xlsx
// install npm install xlsx

import {test} from '@playwright/test'
import * as XLSX from 'xlsx';

const workbook = XLSX.readFile('tests/data/testdata.xlsx');
const sheet = workbook.Sheets['Sheet1'];
const data = XLSX.utils.sheet_to_json(sheet);

// test('xlsx',async ()=>{
//     console.log(data);
    
// })

data.forEach((user: any) => {
    test(`login ${user.username}`, async ({ page }) => {
          await page.goto('https://freelance-learn-automation.vercel.app/login')
        await page.fill('#email1', user.username);
        await page.fill('#password1', user.password);
    });
});

