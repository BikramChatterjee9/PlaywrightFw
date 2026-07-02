import { test, expect } from '../src/fixtures/pageFixture'



test.beforeEach('pre-condition', async ({ loginPage }) => {
    
    await loginPage.gotoLoginPage()
})

test('login title test', async ({ loginPage }) => {
    let title: String = await loginPage.getLoginPageTitle()
    console.log('page title is ', title)
    expect(title).toBe('Account Login')
})

test('login forgot password link', async ({loginPage  }) => {
    expect(await loginPage.isForgotPassLink()).toBeTruthy()
})

test('login to app', async ({ loginPage,homePage }) => {
    await loginPage.doLogin('rapanomik@gmail.com','vicky123')
    expect.soft(await homePage.verifyLogoutLink()).toBeTruthy()
})

