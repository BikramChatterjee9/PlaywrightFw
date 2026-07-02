import {test as baseTest} from '@playwright/test'

import {HomePage} from '../pages/HomePage'
import {LoginPage} from '../pages/LoginPage'

type pageFixture={
    homePage:HomePage,
    loginPage:LoginPage
}

export let test = baseTest.extend<pageFixture>({
    loginPage:async({page},use)=>{

        let loginPage = new LoginPage(page)
        await use(loginPage)
    },

    homePage:async({page},use)=>{

        let homePage = new HomePage(page)
        await use(homePage)
    }
})

export {expect} from '@playwright/test'