import { time } from "node:console";
import { authenticatedTest as test, expect } from "../../src/fixtures/test.fixture";
import { TimePage } from "../../src/pages/time.page";

test.describe('Time module @regression', async() => {
    test('should open time module', async({timePage}) => {
        await timePage.goto();
        await expect(timePage.page).toHaveURL(/time\//);
    });

    test('Should navigate to my Timesheets.', async({timePage}) => {
        await timePage.openMyTimesheets();
    });
});