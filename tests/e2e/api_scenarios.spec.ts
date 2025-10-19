import { test, expect } from '../fixtures/baseTest';
import fixtures from '../fixtures/testData.json';


test.describe('API Test Suite', () => {

  

  test('TC-1) GET/products', async ({ request}) => {

    const apiURL = 'https://api.practicesoftwaretesting.com';
    const response = await request.get(apiURL + '/products');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
    
    for (const product of responseBody.data) {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('in_stock');
      expect(typeof product.name).toBe('string');
      expect(typeof product.price).toBe('number');
      expect(typeof product.in_stock).toBe('boolean');
    }

    for (const product of responseBody.data) {
      expect(product.price).toBeGreaterThan(0);
      expect(['A', 'B', 'C', 'D', 'E']).toContain(product.co2_rating);
    }

    expect(responseBody.data[0].name).toBe('Combination Pliers');
    expect(responseBody.data[0].in_stock).toBe(true);
    
  });


  test('TC-2) POST/users/login', async ({ request}) => {

    const email = fixtures.emails[0];
    const password = fixtures.passwords[0];

    const apiURL = 'https://api.practicesoftwaretesting.com';
    const response = await request.post(apiURL + '/users/login', {
        data: {
            email: email,
            password: password
        }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.access_token).toBeTruthy();
    expect(responseBody.token_type).toBe('bearer');

  });


  test('TC-3) GET/products/:id', async ({ request}) => {

    const apiURL = 'https://api.practicesoftwaretesting.com';
    const response = await request.get(apiURL + '/products');

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    const firstProductId = responseBody.data[0].id;

    const productResponse = await request.get(apiURL + `/products/${firstProductId}`);
    expect(productResponse.status()).toBe(200);

    const productDetails = await productResponse.json();
    console.log(productDetails);

    
    

    });
}); 