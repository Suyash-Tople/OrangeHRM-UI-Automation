import { authenticatedTest as test, expect } from "../../src/fixtures/test.fixture";

test.describe('Dashboard @smoke', () => {

    test('should display dashboard after login', async ({ page, dashboardPage }) => {

        await test.step('Checking page loaded', async() => {
            await dashboardPage.expectLoaded();
            await expect(page).toHaveURL(/dashboard\/index/);
        });

        await test.step('Verify main navigation', async () => {
        await dashboardPage.menu.expectVisible('Admin');
        await dashboardPage.menu.expectVisible('Leave');
        await dashboardPage.menu.expectVisible('Time');
        await dashboardPage.menu.expectVisible('Recruitment');
        });
    });
});