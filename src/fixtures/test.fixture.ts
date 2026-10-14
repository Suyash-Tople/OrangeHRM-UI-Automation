import {test as base, expect} from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { env } from '../utils/environment';

type AppFixtures = {
    loginPage: LoginPage;
}

export const test = base.extend<AppFixtures>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    }
})
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