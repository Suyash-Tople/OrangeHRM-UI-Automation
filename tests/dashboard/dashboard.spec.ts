import { test, expect } from "../../src/fixtures/test.fixture";


test('should display dashboard after login', async ({dashboardPage, page }) => {

    await test.step('Checking page loaded', async() => {
        await dashboardPage.expectLoaded();
    });

    await test.step('Verify main navigation', async () => {
    await dashboardPage.menu.expectVisible('Admin');
    await dashboardPage.menu.expectVisible('Leave');
    await dashboardPage.menu.expectVisible('Time');
    await dashboardPage.menu.expectVisible('Recruitment');
    });
});