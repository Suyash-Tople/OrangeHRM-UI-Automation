import { expect, type Page } from "@playwright/test";
import { MainMenu } from "../components/main-menu.component";

export class DashboardPage{
    readonly menu: MainMenu;
    private readonly page: Page

    constructor(page: Page){
        this.page = page,
        this.menu = new MainMenu(page);
    }

    async expectLoaded(): Promise<void>{
        await expect(this.page).toHaveURL(/dashboard\/index/);

        await expect(
            this.page.getByRole('heading', {
                name: 'Dashboard',
                exact: true
            })
        ).toBeVisible();
    }
}