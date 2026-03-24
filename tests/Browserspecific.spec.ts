
import {test,expect,chromium}from '@playwright/test'
import { channel } from 'node:diagnostics_channel';

test("chome channel run", async ({page})=>{

    // we should not call like this , becuse above 
    //When you use: test('...', async ({ page }) => {})
    //Playwright already launches the browser for you based on config.
    //You must configure browser/channel in playwright.config.ts
   
    chromium.launch; 
   channel:'opera'
   await page.goto("https://saucelabs.com/");
})