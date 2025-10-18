import { test, expect } from '../fixtures/baseTest';
import fixtures from '../fixtures/testData.json';


test.describe('Login Test Suite', () => {

    

  test.beforeEach(async ({ page, helpers, homepage }) => {
    await page.goto('/');
    
  });


  test('TC-1) Successful Login and Logout', async ({ page, homepage, helpers, login }) => {

    const email = fixtures.emails[0];
    const password = fixtures.passwords[0];

    await homepage.clickToSignIn();
    await helpers.fillInputField(login.emailInput, email);
    await helpers.fillInputField(login.passwordInput, password);
    await login.clickLoginButton();
    await helpers.urlContains('admin/dashboard');

    await login.clickNavMenu();
    await login.clickSignOutButton();

  });

});
