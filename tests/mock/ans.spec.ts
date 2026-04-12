import { test, expect, Locator } from '@playwright/test';

 

test('select India from static dropdown', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/dropdown');

 

  const dropdown: Locator = page.locator('#country');

 

  // Retrieve and print all options

  const allOptions = await dropdown.locator('option').allTextContents();

  console.log('All country options:', allOptions.map(t => t.trim()));

 

  // Select only India (use label or value)

  await dropdown.selectOption({ label: 'India' });

  // await dropdown.selectOption({ value: 'IN' });

 

  await expect(dropdown).toHaveValue('IN');

});




