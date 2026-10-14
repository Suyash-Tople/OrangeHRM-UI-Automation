import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    readonly username: Locator;
    readonly password: Locator
    readonly loginButton: Locator;
    readonly loginHeading: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        super(page);

        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', {
            name: 'Login',
            exact: true
        });
        this.loginHeading = page.getByRole('heading', {
        name: 'Login',
        exact: true
        });
        this.errorMessage= page.getByRole('alert');
    }

    async goto(): Promise<void> {
        await this.open('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username: string, password: string): Promise<void> {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async expectLoginPage(): Promise<void> {
        await expect(this.loginHeading).toBeVisible();
    }
}