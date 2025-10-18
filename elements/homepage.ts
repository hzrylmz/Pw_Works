import { Locator, Page } from '@playwright/test';
import { Helpers } from '../utils/helpers';

export class HomePage {
  readonly signInButton: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(private readonly page: Page) {
    this.signInButton = page.locator('[data-test="nav-sign-in"]');
    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-submit"]');
  }

  async clickToSignIn() {
    await this.signInButton.click();
    await this.page.waitForURL('auth/login');
  }
}
