import {expect, type Locator, type Page} from '@playwright/test';
import { MainMenu } from '../components/main-menu.component';

export class AdminPage{
    readonly menu: MainMenu;
    readonly userNameInput: Locator;
    readonly searchButton: Locator;
    readonly resetButton: Locator;
    readonly addButton: Locator;
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
        this.menu = new MainMenu(page);

        this.userNameInput = page.getByRole('textbox').nth(1)

        this.searchButton = page.getByRole('button', {
            name: 'Search',
            exact: true
        });

        this.resetButton = page.getByRole('button', {
            name: 'Reset',
            exact: true
        });

        this.addButton = page.getByRole('button', {
            name: 'Add',
            exact: true
        });
    }

    async goto(): Promise<void> {
        await this.menu.navigateTo('Admin');
    }

    async expectLoaded(): Promise<void> {
        await expect(this.page).toHaveURL(/admin\/viewSystemUsers/);
        await expect(
            this.page.getByRole('heading', {
                name: /system users/i
            })
        ).toBeVisible();
    }

    async searchByUsername(username: string): Promise<void>{
        await this.userNameInput.fill(username);
        await this.searchButton.click();
    }

    async resetSearch(): Promise<void>{
        await this.resetButton.click();
    }
}