import {test , expect} from '@playwright/test';

test('API get request', async ({request}) => {

    const response = await request.get('https://fake-json-api.mock.beeceptor.com/companies');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();

})