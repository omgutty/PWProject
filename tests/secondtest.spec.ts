import { test, expect } from '@playwright/test';

test('second test', async ({ page})=> {
    await page.goto("https://chatgpt.com/");

})
