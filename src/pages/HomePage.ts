import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage
{
    private readonly logoutLink:Locator
    private readonly heading:Locator

    constructor(page:Page)
    {
        super(page)
        this.logoutLink=page.getByRole('link',{name:'Logout'}).last()
        this.heading=page.getByRole('heading',{level:2})
    }

    async getHomePageTitle():Promise<String>
    {
        return await this.page.title()
    }

    async verifyLogoutLink():Promise<boolean>
    {
        return await this.logoutLink.isVisible()
    }

    async getHomePageHeaders():Promise<String[]>
    {
        return await this.heading.allInnerTexts()
    }
}