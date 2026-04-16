//Excel Data Provider
// librarie xlsx
// install npm install xlsx

import {test} from '@playwright/test'
import * as XLSX from 'xlsx';

const workbook = XLSX.readFile('tests/data/testdata.xlsx');
const sheet = workbook.Sheets['Sheet1'];
const data = XLSX.utils.sheet_to_json(sheet);

test('xlsx',async ()=>{
    console.log(data);
})

