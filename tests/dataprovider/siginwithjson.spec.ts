import { test,expect } from '@playwright/test';
import { json } from 'node:stream/consumers';
//import testData from '/data/logindata.json';
import * as fs from 'fs';

type Logindata={
    username:string,
    password:string
}

const logindata:Logindata[]= JSON.parse(fs.readFileSync('tests/data/logindata.json','utf-8'));

for (const user of logindata){
    test(`sign in with json file ${user.username}`,async ({page})=>{

    await page.goto('https://freelance-learn-automation.vercel.app/login')
    await page.locator('#email1').fill(user.username);
    await page.locator('#password1').fill(user.password);
    await page.locator('.submit-btn').click();
    await expect(page.locator('.welcomeMessage')).toHaveText('Welcome Admin Manager to Learn Automation Courses');

})
}


