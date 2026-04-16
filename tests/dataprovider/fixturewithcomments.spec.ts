import { test as base, expect } from '@playwright/test';
// Import Playwright's original test object and rename it as "base"
// Why rename?
// Because we want to create our own custom test object by extending it
// "expect" is imported separately for assertions

// ------------------------------------------------------------
// STEP 1: Define TypeScript type for our custom fixture data
// ------------------------------------------------------------

type TestData = {
    username: string;
    password: string;
};
// This type defines the structure of the fixture data
// It tells TypeScript that our fixture object must contain:
// 1. username -> string
// 2. password -> string
//
// Benefits:
// - autocomplete in VS Code
// - catches typing mistakes
// - improves readability

// ------------------------------------------------------------
// STEP 2: Extend the original Playwright test object
// ------------------------------------------------------------

const test = base.extend<{ testData: TestData }>({
    // base = original Playwright test
    // extend() = adds our custom fixture
    //
    // After extending, "test" now contains:
    // - page
    // - browser
    // - context
    // - request
    // - testData   <-- our custom fixture
    //
    // <{ testData: TestData }>
    // This is generic typing
    // It tells TypeScript:
    // "I am adding one custom fixture named testData
    // and its structure follows TestData type"

    testData: async ({}, use) => {
        // testData = fixture name
        // async = fixture can perform async operations
        //
        // ({}) = dependency input object
        // Empty object means this fixture is INDEPENDENT
        // It does NOT depend on page/browser/context
        //
        // Example:
        // async ({ page }, use)
        // means fixture depends on page
        //
        // Here:
        // async ({}, use)
        // means no dependency
        //
        // use = special Playwright function
        // used to send fixture data into test block

        await use({
            username: 'admin@email.com',
            password: 'admin@123'
        });
        // use() provides this object to the test
        //
        // Think:
        // testData = {
        //   username: 'admin@email.com',
        //   password: 'admin@123'
        // }
        //
        // This becomes available inside test:
        // async ({ page, testData })
        //
        // IMPORTANT:
        // Anything BEFORE use() = setup
        // Anything AFTER use() = cleanup / teardown
    }
});

// ------------------------------------------------------------
// STEP 3: Use the custom fixture inside test
// ------------------------------------------------------------

test('login using fixture data', async ({ page, testData }) => {
    // page = built-in Playwright fixture
    // testData = our custom fixture
    //
    // Because we extended base,
    // both built-in + custom fixtures are available here

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    // Opens login page

    await page.locator('#email1').fill(testData.username);
    // Uses username from fixture

    await page.locator('#password1').fill(testData.password);
    // Uses password from fixture

    await page.locator('.submit-btn').click();
    // Click login button

    await expect(page.locator('.welcomeMessage'))
        .toHaveText('Welcome Admin Manager to Learn Automation Courses');
    // Assertion to verify successful login
});