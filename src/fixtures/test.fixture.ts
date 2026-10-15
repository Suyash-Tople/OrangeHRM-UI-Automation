import {test as base, expect} from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { AdminPage } from '../pages/admin.page';
import { TimePage } from '../pages/time.page';
import { LeavePage } from '../pages/leave.page';
import { RecruitmentPage } from '../pages/recruitment.page';
import { env } from '../utils/environment';

type AppFixtures = {
    loginPage: LoginPage;
    dashboradPage: DashboardPage;
    adminPage: AdminPage;
    timePage: TimePage;
    leavePage: LeavePage;
    recruitmentPage: RecruitmentPage;
}

export const test = base.extend<AppFixtures>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },

    dashboradPage: async({page}, use) => {
      await use(new DashboardPage(page));
    },

    adminPage: async({page}, use) =>{
      await use(new AdminPage(page));
    },

    timePage: async({page}, use) =>{
      await use(new TimePage(page));
    },
    
    leavePage: async({page}, use) => {
      await use(new LeavePage(page));
    },

    recruitmentPage: async({page}, use) =>{
      await use(new RecruitmentPage(page));
    }
});

export { expect };

export const authenticatedTest = test.extend({
  page: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(env.username, env.password);

    await expect(page).toHaveURL(/dashboard\/index/);

    await use(page);
  }
});