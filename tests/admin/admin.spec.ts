import { authenticatedTest as test, expect } from "../../src/fixtures/test.fixture";
import { AdminPage } from "../../src/pages/admin.page";
import { testData } from "../../src/utils/test-data";

test.describe('Admin module @regression', () => {
    
    test('should open system users and search for a nonexistent user.', async ({adminPage}) => {
        await test.step('Open admin module', async() => {
            await adminPage.goto();
            await adminPage.expectLoaded();
        });

        await test.step('Search for nonexistent username', async() => {
            await adminPage.searchByUsername(testData.search.nonexistentUsername);
        })

       await test.step('Verify no matching user is displayed', async() => {
        await expect(
            adminPage.page.getByRole('row').filter({
                hasText: testData.search.nonexistentUsername
            })
        ).toHaveCount(0);
       });
          
    });
})