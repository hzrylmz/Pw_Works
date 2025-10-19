import { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";


export class Helpers {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }



    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async titleIs(expectedTitle: string) {
        const title = await this.page.title();
        return title === expectedTitle;
    }

    async urlIs(expectedUrl: string) {
        const url = this.page.url();
        return url === expectedUrl;
    }

    async urlContains(expectedSubstring: string) {
        const url = this.page.url();
        return url.includes(expectedSubstring);
    }

    async verifyElementCount(element: Locator, count: number) {
        await expect(element).toHaveCount(count);
        const actualCount = await element.count();
        for (let i = 0; i < count; i++) {
            await expect(element.nth(i)).toBeVisible();
        }
    }


    async clicktoElementbyText(element: Locator, text: string) {
        await element.filter({ hasText: text }).click();
    }


    async fillInputField(element: Locator, value: string) {
        await element.fill(value);
    }

    async notificationIsVisible(element: Locator) {
        await expect(element).toBeVisible();
    }


    async selectOptionFromDropdown(element: Locator, optionText: string) {
        await element.selectOption({ label: optionText });
    }

    async textIsVisible(text: string) {
        await expect(this.page.getByText(text)).toBeVisible();
    }

    async clickToElement(element: Locator) {
        await element.click();
    }

 


}