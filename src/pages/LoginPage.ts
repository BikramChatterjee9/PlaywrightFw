import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage
{
    private readonly emailId:Locator
    private readonly password:Locator
    private readonly loginButton:Locator
    private readonly fotgotPasswordLink:Locator
    private readonly logo:Locator

    constructor(page:Page)
    {
        super(page)
        this.emailId=page.getByRole('textbox',{name:'E-Mail Address'})
        this.password=page.getByRole('textbox',{name:'Password'})
        this.loginButton=page.getByRole('button',{name:'Login'})
        this.fotgotPasswordLink=page.getByRole('link',{name:'Forgotten Password'}).first()
        this.logo=page.getByAltText('naveenopencart')
    }

    async gotoLoginPage():Promise<void>
    {
        await this.page.goto('opencart/index.php?route=account/login')
    }

    async getLoginPageTitle():Promise<String>
    {
         return await this.page.title()
    }

    async isForgotPassLink():Promise<boolean>
    {
        return await this.fotgotPasswordLink.isVisible()
    }

    async doLogin(username:string,password:string):Promise<void>
    {
        await this.emailId.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }
}