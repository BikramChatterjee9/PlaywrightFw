// import { test, expect } from '../src/fixtures/pageFixture'



// test.beforeEach('pre-condition', async ({ loginPage }) => {
    
//     await loginPage.gotoLoginPage()
//     await loginPage.doLogin('rapanomik@gmail.com','vicky123')
// })

// test('verify title',async({homePage})=>{
//     let title=await homePage.getHomePageTitle()
//     console.log(title)
//     expect(title).toBe('My Account')
// })

// test('verify logout link',async({homePage})=>{
//     expect(await homePage.verifyLogoutLink()).toBeTruthy()
// })

// test('verify all headers',async({homePage})=>{
//   let allHeaders = await homePage.getHomePageHeaders()
//   expect.soft(allHeaders).toHaveLength(4)
//   expect.soft(allHeaders).toEqual([
//     'My Account',
//     'My Orders',
//     'My Affiliate Account',
//     'Newsletter'
//   ])  
// })
