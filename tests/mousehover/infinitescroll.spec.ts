/**
 * 
For infinite scroll pages (important)

Some pages load more content only after scrolling.

In that case, one scroll may not be enough.



while (true) {
    const previousHeight = await page.evaluate(() => document.body.scrollHeight);

    await page.keyboard.press('End');
    await page.waitForTimeout(2000);

    const newHeight = await page.evaluate(() => document.body.scrollHeight);

    if (newHeight === previousHeight) break;
}

//This keeps scrolling until no new content loads.

//This is very common in LinkedIn, Amazon, social media feeds, etc.
 */