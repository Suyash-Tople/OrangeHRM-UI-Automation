import type { Locator, Page } from "@playwright/test";

export class BasePage {
    constructor (protected readonly page: Page) {}

    async open(path: string): Promise<void>{
        await this.page.goto(path);
    }

    async click(locator: Locator): Promise<void>{
        await locator.click();
    }

    async fill(locator: Locator, value: string): Promise<void>{
        await locator.fill(value);
    }
}