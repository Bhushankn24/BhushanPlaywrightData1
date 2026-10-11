import { test, expect } from '@playwright/test';

test('API post request', async ({ request }) => {

  const response = await request.post('https://reqres.in/api/users?page=2',{
    data:{
        "name": "Bhushan",
        "job" : "Leader"
         }
  });

    expect(response.status()).toBe(401);

    const responseBody = await response.json();

    console.log(responseBody);


})
