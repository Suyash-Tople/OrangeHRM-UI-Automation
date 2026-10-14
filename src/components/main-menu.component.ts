import {expect, type Locator, type Page} from '@playwright/test';

export class MainMenu{
    private readonly page: Page;

    readonly dashboard: Locator;
    readonly admin: Locator;
    readonly leave: Locator;
    readonly time: Locator;
    readonly recruitment: Locator;

    constructor(page: Page){
        this.page = page;

        this.dashboard = page.getByRole('link', {
            name: 'Dashboard',
            exact: true
        });

        this.admin = page.getByRole('link', {
            name: 'Admin',
            exact: true
        });

        this.leave = page.getByRole('link', {
            name: 'Leave',
            exact: true
        });

        this.recruitment = page.getByRole('link', {
            name: 'Recruitment',
            exact: true
        });

        this.time = page.getByRole('link', {
            name: 'Time',
            exact: true
        });
    }

    async navigateTo(
        module: 'Dashboard' | 'Admin' | 'Leave' | 'Time' | 'Recruitment'
    ): Promise<void> {
        const menuItems = {
            Dashboard: this.dashboard,
            Admin: this.admin,
            Leave: this.leave,
            Time: this.time,
            Recruitment: this.recruitment
        };

        await menuItems[module].click();
    }

    async expectVisible(
    module: 'Dashboard' | 'Admin' | 'Leave' | 'Time' | 'Recruitment'
  ): Promise<void> {
    const menuItems = {
      Dashboard: this.dashboard,
      Admin: this.admin,
      Leave: this.leave,
      Time: this.time,
      Recruitment: this.recruitment
    };

    await expect(menuItems[module]).toBeVisible();
  }
}