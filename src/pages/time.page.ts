import {expect, type Locator, type Page} from '@playwright/test'
import { MainMenu } from '../components/main-menu.component'

export class TimePage{
    readonly menu: MainMenu;
    readonly page: Page;
    readonly timesheetsLink: Locator;
    readonly attendanceLink: Locator;
    readonly mytimesheetsLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.menu = new MainMenu(page);
        
        this.timesheetsLink = page.getByRole('link', {
            name: 'Timesheets',
            exact: true
        });

        this.attendanceLink = page.getByRole('link', {
            name: 'Attendance',
            exact: true
        });

        this.mytimesheetsLink = page.getByRole('link', {
            name:'My Timesheets',
            exact:true
        });
    }

    async goto(): Promise<void> {
        await this.menu.navigateTo('Time');
    }

    async openMyTimesheets(): Promise<void>{
        await this.goto();
        await this.mytimesheetsLink.click();
    }

    async expectLoaded(): Promise<void>{
        await expect(this.page).toHaveURL(/time\/viewEmployeeTimesheet/);
    }
}