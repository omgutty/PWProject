import {test} from '@playwright/test';
test.beforeAll('before all ',async ()=>{
    console.log('Before all test')
})

test.afterAll('after all ',async ()=>{
    console.log('After all test')
})

test.beforeEach('before each ',async ({page})=>{
    console.log('Before each test')
})

test.afterEach('after each ',async ()=>{
    console.log('after  each test')
})

test('test 1 ',async ()=>{
    console.log(' test 1')
})

test('test 2 ',async ()=>{
    console.log( 'test 2')
})

test('test 3',async ()=>{
    console.log('test 3')
})

