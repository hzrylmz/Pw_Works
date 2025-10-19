import { Locator, Page } from '@playwright/test';
import { Helpers } from '../utils/helpers';

export class HomePage {
  readonly signInButton: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly addToCartButton: Locator;
  readonly productAddedToShoppingCartNotification: Locator;
  readonly cartIcon: Locator;
  readonly proceedToCheckoutButton_1: Locator;
  readonly proceedToCheckoutButton_2: Locator;
  readonly proceedToCheckoutButton_3: Locator;
  readonly continueShoppingButton: Locator;
  readonly continueAsGuestTabButton: Locator;
  readonly signInTabButton: Locator;
  readonly stateInput: Locator;
  readonly postCodeInput: Locator;
  readonly paymentMethodIsRequiredText: Locator;
  readonly paymentMethodDropdown: Locator;
  readonly bankNameInput: Locator;
  readonly accountNameInput: Locator;
  readonly accountNumberInput: Locator;
  readonly confirmButton: Locator;

  constructor(private readonly page: Page) {
    this.signInButton = page.locator('[data-test="nav-sign-in"]');
    this.emailInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-submit"]');
    this.addToCartButton = page.locator('[data-test="add-to-cart"]')
    this.productAddedToShoppingCartNotification = page.getByRole('alert', { name: 'Product added to shopping' })
    this.cartIcon = page.locator('[data-test="nav-cart"]')
    this.proceedToCheckoutButton_1 = page.locator('[data-test="proceed-1"]')
    this.proceedToCheckoutButton_2 = page.locator('[data-test="proceed-2"]')
    this.proceedToCheckoutButton_3 = page.locator('[data-test="proceed-3"]')  
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]')
    this.continueAsGuestTabButton = page.getByRole('tab', { name: 'Continue as Guest' });
    this.signInTabButton = page.getByRole('tab', { name: 'Sign in' })
    this.stateInput = page.locator('[placeholder="State *"]');
    this.postCodeInput = page.locator('[placeholder="Your Postcode *"]');
    this.paymentMethodIsRequiredText = page.getByText('Payment method is required.')
    this.paymentMethodDropdown = page.locator('[data-test="payment_method"]');
    this.bankNameInput = page.locator('[data-test="bank_name"]');
    this.accountNameInput = page.locator('[data-test="account_name"]');
    this.accountNumberInput = page.locator('[data-test="account_number"]');
    this.confirmButton = page.locator('[data-test="finish"]')

  }


  


  async clickToSignIn() {
    await this.signInButton.click();
    await this.page.waitForURL('auth/login');
  }

  async clickToAddToCart() {
    await this.addToCartButton.click(); 
  }

  async clickToCartIcon() {
    await this.cartIcon.click();
  }

  async clickToContinueShopping() {
    await this.continueShoppingButton.click();
  }

  async clickToConfirm() {
    await this.confirmButton.click();
  }
}
