import {expect, type Page, type Locator} from '@playwright/test'
import { MainMenu } from '../components/main-menu.component'
import { time } from 'node:console';

export class LeavePage {
    readonly menu: MainMenu;
    readonly page: Page;
    readonly applyLink: Locator;
    readonly myLeaveLink: Locator;
    readonly leaveListLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.menu = new MainMenu(page);

        this.applyLink = page.getByRole('link', {
            name: 'Apply',
            exact: true
        });

        this.myLeaveLink = page.getByRole('link', {
            name: 'My Leave',
            exact: true
        });

        this.leaveListLink = page.getByRole('link', {
            name: 'Leave List',
            exact: true
        });
    }

    async goto(): Promise<void>{
        await this.menu.navigateTo('Leave');
    }

    async openApply(): Promise<void>{
        await this.goto();
        await this.applyLink.click();
    }

    async openMyLeave(): Promise<void> {
        await this.goto();
        await this.myLeaveLink.click();
    }
    
    async expectApplypage(): Promise<void> {
        await expect(this.page).toHaveURL(/leave\/applyLeave/);
        await expect(
            this.page.getByRole('heading',{
                name: 'Apply Leave',
                exact: true
            })
        ).toBeVisible();
    }
}