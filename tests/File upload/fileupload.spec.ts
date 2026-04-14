
// path from 'path';
import path from 'node:path'; 
//import  * as path from 'path';

import  {test,expect} from '@playwright/test';

test('fileupload', async ({page})=>{

    page.goto('https://the-internet.herokuapp.com/upload')

    const filepath=path.resolve('tests/data/file1.txt')
    //locator of the fileupload button, and file path relative 
    await page.setInputFiles('#file-upload',filepath);
    //multiple files upload 
    //await page.setInputFiles('#file-upload',[filepath,filepath2]);
    expect(page.locator('h3')).toHaveText('File Uploader');
})
