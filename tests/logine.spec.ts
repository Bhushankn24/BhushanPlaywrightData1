import { test, expect } from '@playwright/test';

test('Logine Storage state', async ({ page }) => {
	await page.goto('https://demowebshop.tricentis.com/books');
    await page.getByRole('link', {name: 'Log in'}).click();
    await page.getByLabel('Email').fill('bhushanlr143@gmail.com');
    await page.getByLabel('Password').fill('Bhushan@1991');
    await page.getByRole('button', {name: 'Log in'}).click();
    
    await page.context().storageState({ path: 'Test Data / storageState.json' });
});
