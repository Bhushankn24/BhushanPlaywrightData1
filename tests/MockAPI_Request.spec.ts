import { test, expect } from '@playwright/test';
//import { json } from 'stream/consumers';


test('Mock API Request', async ({ page }) => {
    await page.route('*/**api/v1/fruits', async (route) => {
        const jsonResponse = [

            {name: 'Playwright typescript by testers talk', id :12},
            {name: 'Playwright javascript by testers talk', id :13},
            {name: 'Cypress by testers talk', id :14},
            {name: 'API testing by testers talk', id :15}
           ];
        await route.fulfill({json: jsonResponse});
    });

    await page.goto('https://demo.playwright.dev/api-mocking/');

        await expect(page.getByText('Playwright typescript by testers talk')).toBeVisible();
        await expect(page.getByText('Playwright javascript by testers talk')).toBeVisible();
        await expect(page.getByText('Cypress by testers talk')).toBeVisible();
        await expect(page.getByText('API testing by testers talk')).toBeVisible();
});