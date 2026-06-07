import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devtest.devtechnosys.tech/client/login');
  await page.getByRole('textbox', { name: 'Écrire email' }).click();
  await page.getByRole('textbox', { name: 'Écrire email' }).fill('');
  await page.getByRole('button', { name: 'Connexion' }).click();
  await page.getByRole('textbox', { name: 'Écrire email' }).click();
  await page.getByRole('textbox', { name: 'Écrire email' }).fill('bhavna');
  await page.getByRole('button', { name: 'Connexion' }).click();
  await page.getByRole('textbox', { name: 'Écrire email' }).click();
  await page.getByRole('textbox', { name: 'Écrire email' }).fill('bhavna@mailinator.com');
  await page.getByRole('textbox', { name: 'Écrire mot de passe' }).click();
  await page.getByRole('textbox', { name: 'Écrire mot de passe' }).fill('Test@#123');
  await page.getByText('Afficher').click();
  await page.getByRole('textbox', { name: 'Écrire mot de passe' }).click();
  await page.getByRole('textbox', { name: 'Écrire mot de passe' }).fill('Test@#1234');
  await page.getByRole('button', { name: 'Connexion' }).click();
  await page.getByRole('textbox', { name: 'Écrire mot de passe' }).click();
  await page.getByRole('textbox', { name: 'Écrire mot de passe' }).fill('Test@#123');
  await page.getByRole('button', { name: 'Connexion' }).click();
});