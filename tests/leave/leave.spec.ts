import { authenticatedTest as test, expect } from "../../src/fixtures/test.fixture";
import { LeavePage } from "../../src/pages/leave.page";

test.describe('Leave module @Regression', async() => {
    test('Should open the apply leave page', async({leavePage}) => {
        await test.step('Navigate to Apply leave', async() => {
            await leavePage.openApply();
        });
        
        await test.step('Verify page content', async() => {
            await leavePage.expectApplypage();
        });
    });

    test('should open My Leave', async({leavePage, page}) => {
        await leavePage.openMyLeave();
        await page.waitForURL(/leave\/viewMyLeaveList/)
    });
})