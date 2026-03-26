 import {test} from  '@playwright/test';

// this test is not ran in 3 seconds it fail 
//  test("timeout",{ timeout: 30000 },async ({page})=>{
//     await page.goto("https://google.com/")
//    // test.setTimeout(30000);
//  });



 //or
 //below test must finish in 30 seconds as we are seting the timeout for 40 seconds for this test
test("timeout2", async ({ page }) => {

  test.setTimeout(40000); // 30 seconds

  await page.goto("https://icarus.cloudamber.com/Home/Index");

});



///// action time outs 


