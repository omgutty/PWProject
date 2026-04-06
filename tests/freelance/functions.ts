import { Locator } from '@playwright/test';

// export async function multiselctiondropdown(
//     page: Page,
//     locator: string,
//     hobbies: string[]
// ): Promise<void> {
//     await page.locator(locator).selectOption(hobbies);
// }

export async function multiselction(
    element: Locator,
    hobbies: string[]
): Promise<void> {
    await element.selectOption(hobbies);
}

// export async function selectdropdown(
//     page:Page,
//     locator:string,
//     state:string
// ):Promise<void>{
//     await page.selectOption(locator,{label:state})
// }

export async function selectdropdown(
    element: Locator,
    state: string
): Promise<void> {
    await element.selectOption({ label: state });
}


// export async function radiobuttonclick (
//     page:Page,
//     option:string
// ):Promise<void> {
//     await page.locator(`.genders-div input[value='${option}']`).click()
// }

export async function radiobuttonclick(
    element: Locator
): Promise<void> {
    await element.click();
}

// export async function checkboxselect(
//     page:Page,
//     options:string[]
// ):Promise<void>{
//     const section = page.locator('.interests-div');

//     for (const option of options) {
//         const checkbox = section.getByText(option, { exact: true });

//         await checkbox.waitFor({ state: 'visible' });
//         await checkbox.click();
//     }
// }

export async function checkboxselect(
    section: Locator,
    options: string[]
): Promise<void> {
    for (const option of options) {
        const checkbox = section.getByText(option, {
            exact: true
        });

        await checkbox.click();
    }
}


// export async function sendtext(
//     page:Page,
//     locator:string,
//     text:string
// ):Promise<void> {
//     await page.locator(locator).fill(text);
// }

export async function sendtext(
    element: Locator,
    text: string
): Promise<void> {
    await element.fill(text);
}