import {test, expect } from "../../src/fixtures/test.fixture";
import { LeavePage } from "../../src/pages/leave.page";

test('Should open the apply leave page', async({leavePage, page}) => {
    await page.goto('/web/index.php/dashboard/index');
    
    await test.step('Navigate to Apply leave', async() => {
        await leavePage.openApply();
    });
    
    await test.step('Verify page content', async() => {
        await leavePage.expectApplypage();
    });
   
    await test.step('should open My Leave', async() => {
        await leavePage.openMyLeave();
    });
});
