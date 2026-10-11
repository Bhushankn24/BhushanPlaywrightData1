import {test , Expect} from "@playwright/test";

test('Skip Logine', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');
    await page.waitForTimeout(3000);

})



