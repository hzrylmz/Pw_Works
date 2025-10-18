import { test, expect } from '../fixtures/baseTest';




test.describe('Homepage Test Suite', () => {

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

});