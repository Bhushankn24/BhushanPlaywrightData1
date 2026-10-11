import { test, expect } from '@playwright/test';

test('API get request', async ({ request }) => {

  const response = await request.get('https://reqres.in/api/users?page=2');

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  console.log(responseBody);
  
});



