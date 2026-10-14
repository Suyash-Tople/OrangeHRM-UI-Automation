import {expect, type Page, type Locator} from '@playwright/test'
import { MainMenu } from '../components/main-menu.component'

export class RecruitmentPage{
    readonly menu: MainMenu;
    readonly page: Page;
    readonly candidatesLink: Locator;
    readonly vacanciesLink: Locator;
    readonly addButton: Locator;

    constructor(page: Page){
        this.page = page
        this.menu = new MainMenu(page);
        this.candidatesLink = page.getByRole('link', {
            name: 'Candidates',
            exact: true
        });
        this.vacanciesLink = page.getByRole('link', {
            name: 'Vacancies',
            exact:true
        });
        this.addButton = page.getByRole('button', {
            name: 'Add',
            exact: true
        });
    }

    async goto(): Promise<void>{
        await this.menu.navigateTo('Recruitment');
    }

    async openCandidates(): Promise<void>{
        await this.goto();
        await this.candidatesLink.click();
    }

    async openVacancies(): Promise<void>{
        await this.goto();
        await this.vacanciesLink.click();
    }

    async expectCandidatesPage(): Promise<void>{
        await expect(this.page).toHaveURL(/recruitment\/viewCandidates/);
        await expect(
            this.page.getByRole('heading', {
                name:'Candidates',
                exact: true
            })
        ).toBeVisible();
    }
}