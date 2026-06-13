import { test, expect } from '@playwright/test';

test('Valid Login', async ({ page }) => {
  await page.goto('https://devtest.devtechnosys.tech/client/login');

  await page.getByPlaceholder('Écrire email').fill('bhavna@mailinator.com');

  await page.getByPlaceholder('Écrire mot de passe').fill('Test@#123');

  await page.getByRole('button', { name: 'Connexion' }).click();
});