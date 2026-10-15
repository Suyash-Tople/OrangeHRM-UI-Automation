import {expect, type Locator, type Page} from '@playwright/test'
import { MainMenu } from '../components/main-menu.component'

export class TimePage{
    readonly menu: MainMenu;
    readonly page: Page;
    readonly attendanceLink: Locator;
    readonly myRecords: Locator;
    readonly myRecordsPageHeading: Locator;

    constructor(page: Page){
        this.page = page;
        this.menu = new MainMenu(page);
        
        this.attendanceLink = page.getByText('Attendance');

        this.myRecords = page.getByRole('menuitem', { name: 'My Records' });

        this.myRecordsPageHeading = page.getByRole('heading', { name: 'My Attendance Records' });
    }

    async goto(): Promise<void> {
        await this.menu.navigateTo('Time');
    }

    async openMyTimesheets(): Promise<void>{
        await this.goto();
        await this.attendanceLink.click();
        await this.myRecords.click();
        await expect(this.myRecordsPageHeading).toBeVisible();
    }

    async expectLoaded(): Promise<void>{
        await expect(this.page).toHaveURL(/time\/viewEmployeeTimesheet/);
    }
}