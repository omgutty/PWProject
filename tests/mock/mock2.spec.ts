import { test, Locator } from '@playwright/test';

test('drop down', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dropdown');

    //retrive all options 
    // page.locator()

    // await selectdropdown(page.locator('#country'), 'india');
});

// export async function selectdropdown(
//     element: Locator,
//     state: string
// ): Promise<void> {
//     await element.selectOption({ value: state });
// }