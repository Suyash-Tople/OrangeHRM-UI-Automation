import { authenticatedTest as test, expect } from "../../src/fixtures/test.fixture";

test.describe('Recruitment module @regression', () => {
    test('should open Candidates', async({recruitmentPage}) => {
        await recruitmentPage.openCandidates();
        await recruitmentPage.expectCandidatesPage();
    });


    test('should open vacancies', async({recruitmentPage, page}) => {
        await recruitmentPage.openVacancies();
        await page.waitForURL(/recruitment\/viewJobVacancy/);
    });
});