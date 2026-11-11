import {test, expect } from "../../src/fixtures/test.fixture";

test('should open time module', async({timePage, page}) => {
    await page.goto('/web/index.php/time/viewEmployeeTimesheet');

    await test.step('should open time module', async() => {
        await timePage.goto();
        await expect(timePage.page).toHaveURL(/time\//);
    });

    await test.step('Should navigate to my Timesheets.', async() => {
        await timePage.openMyTimesheets();
    });
});
