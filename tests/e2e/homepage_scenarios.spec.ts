import { test, expect } from '../fixtures/baseTest';
import fixtures from '../fixtures/testData.json';




test.describe('Homepage Test Suite', () => {

  const email = fixtures.emails[0];
  const password = fixtures.passwords[0];
  const state = fixtures.states[0];
  const postCode = fixtures.postCodes[0];



  test.beforeEach(async ({ page, helpers }) => {
    await page.goto('/');
    
  });

  test('TC-1) Check Page Title and URL', async ({ page, helpers }) => {
    await helpers.titleIs('Practice Software Testing - Toolshop - v5.0');
    await helpers.urlIs('https://practicesoftwaretesting.com/');
  });


  test('TC-2) Check how many products are displayed - 2', async ({ page, helpers }) => {
    await helpers.verifyElementCount(page.locator('.col-md-9 .container .card'), 8);
  });

  test('TC-3) Check Product name according to its name ', async ({ page, helpers }) => {
    await helpers.clicktoElementbyText(page.locator('.col-md-9 .container .card'), ' Thor Hammer ');
    await helpers.urlContains('product/01K7WB36H6WXYDNCFCCX731BW0')
  });

  test('TC-4) Order for a product -  Hammer', async ({ page, helpers, homepage, login }) => {
    await helpers.clicktoElementbyText(page.locator('.col-md-9 .container .card'), ' Thor Hammer ');
    await homepage.clickToAddToCart();
    await helpers.notificationIsVisible(homepage.productAddedToShoppingCartNotification);
    await homepage.clickToCartIcon();
    await homepage.clickToProceedToCheckout();

    await helpers.fillInputField(login.emailInput, email);
    await helpers.fillInputField(login.passwordInput, password);
    await login.clickLoginButton();

    await homepage.clickToProceedToCheckout();
    await helpers.fillInputField(homepage.stateInput, state);
    await helpers.fillInputField(homepage.postCodeInput, postCode);

    await homepage.clickToProceedToCheckout();

    await helpers.textIsVisible(' Payment method is required. ');
    await helpers.selectOptionFromDropdown(homepage.paymentMethodDropdown, 'bank-transfer');
    await helpers.fillInputField(homepage.bankNameInput, 'Bank of America');
    await helpers.fillInputField(homepage.accountNameInput, 'John Doe');
    await helpers.fillInputField(homepage.accountNumberInput, '123456789');

    await homepage.clickToConfirm();
    await helpers.textIsVisible('Payment was successful');
    await homepage.clickToConfirm();
    await helpers.textIsVisible('Thanks for your order! Your invoice number is ');

    await login.clickNavMenu();
    await login.clickSignOutButton();




  });

});