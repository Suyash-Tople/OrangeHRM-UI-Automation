import {test, expect} from '../../src/fixtures/test.fixture'
import { env } from '../../src/utils/environment'

test.describe('Authentication', () => {
    test("Valid credentials should open the dashboard @smoke", async({loginPage, page}) =>{
        await loginPage.goto();
        await loginPage.login(env.username, env.password)

        await expect(page).toHaveURL(/dashboard\/index/);
        await expect(
            page.getByRole('heading', {name: 'Dashboard'})
        ).toBeVisible();
    });

    test('Invalid credentails should not authenticate', async({loginPage, page}) => {
        await loginPage.goto();
        await loginPage.login('invalid_user', 'invalid_password');

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(page).toHaveURL(/auth\/login/);
    });
});