import {test, expect } from "../../src/fixtures/test.fixture";

test('should open recruitment page', async({recruitmentPage, page}) => {
    await page.goto('web/index.php/recruitment/viewCandidates');

    await test.step('should open Candidates', async() => {
    await recruitmentPage.openCandidates();
    await recruitmentPage.expectCandidatesPage();
    });


    await test.step('should open vacancies', async() => {
    await recruitmentPage.openVacancies();
    });
});