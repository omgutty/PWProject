// IKEA
//https://in.accounts.ikea.com/login?state=hKFo2SBmYjJGT2R6VmNZM1pKZmphTXZUUUdLeXJYV1doTFlicqFupWxvZ2luo3RpZNkgLWpfRGtJNFBZYlpBQkFva3VLTkxqZjVtZm1CbHd1QlejY2lk2SBQeFZ2SFp1SmFwRWp6T3NEWFlheE5YcjVtNXIyWlE1cw&client=PxVvHZuJapEjzOsDXYaxNXr5m5r2ZQ5s&protocol=oauth2&redirect_uri=https%3A%2F%2Fwww.ikea.com%2Fin%2Fen%2Fprofile%2Flogin%2F&response_type=code&ui_locales=en-IN&code_challenge=Tb64tgGYtSoWhcjbhhRvfX781o4NsMvojVAvH4Jc7nI&code_challenge_method=S256&scope=openid%20profile%20email%20offline_access&audience=https%3A%2F%2Fretail.api.ikea.com&campaign_source=login-flow%7Cuser-icon%7Cslider_off&registration=%7B%7D&consumer=OWF&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4yOS4wIn0%3D&gasid=GA1.1.183845670.1775116619&expUserId=02e6c963-edf1-49f8-8a02-0613565a4431&sessId=9644dfef-e574-4129-93ab-9b45f5a1ee68&episodId=1742896690551.fe6cd051&episodSessId=1775116618587.f4493959.4.1775116620403&dt=D
//select NCR, select Haryna with two differenct function 

import {test, expect, Locator, Page} from '@playwright/test';

test('selectstate',async ({page})=>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    
    await selectbylable(page,'#state','NCR');
    page.setDefaultTimeout(2000);
    await  selectbylablepage(page.locator('#state'),'Haryana')


});

async function selectbylable (page:Page ,locator:string,label:string):Promise<void> {
    await page.selectOption(locator,{label:label});
    
}

async function selectbylablepage(element:Locator,label:string):Promise<void> {
      await element.selectOption({label:label});
}
