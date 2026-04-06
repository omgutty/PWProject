import { expect, test } from '@playwright/test';
import * as util from './functions';
import { TestDataGenerator } from './testData';

const userName = TestDataGenerator.getName();
const email = TestDataGenerator.getEmail();
const password = 'admin@123';

test('signup', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');

    await page.locator('.subLink').click();
    await expect(page).toHaveURL(/signup/);

    console.log(userName);
    await page.locator('#name').fill(userName);
    await page.locator('#email').fill(email);
    await util.sendtext(page.locator('#password'), password);
    await util.checkboxselect(page.locator('.interests-div'),['AWS', 'JS']);
    await util.radiobuttonclick(page.locator(".genders-div input[value='Female']"));
    await util.selectdropdown(page.locator('#state'), 'Assam');
    await util.multiselction(page.locator('#hobbies'),['Reading', 'Swimming']);

    await page.getByRole('button', { name: 'Sign up' }).click();
});


test('login with created user', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator('#email1').fill(email);
    await page.locator('#password1').fill(password);
    await page.getByRole('button', { name: 'Sign in' }).click();
    const loginsuccessfull=await page.locator('.welcomeMessage').textContent();
    expect(loginsuccessfull).toBeTruthy();
});