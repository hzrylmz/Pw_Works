
import { Locator, Page } from '@playwright/test';
import { Helpers } from '../utils/helpers';

export class Login {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly navMenu: Locator;
  readonly signOutButton: Locator;

  constructor(private readonly page: Page) {

    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-submit"]');
    this.navMenu = page.locator('[data-test="nav-menu"]');
    this.signOutButton = page.locator('[data-test="nav-sign-out"]')
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async clickNavMenu() {
    await this.navMenu.click();
  }

  async clickSignOutButton() {
    await this.signOutButton.click();
  }

}
