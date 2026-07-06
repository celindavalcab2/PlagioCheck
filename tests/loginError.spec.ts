import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('Login incorrecto', async ({ page }) => {
  const login = new LoginPage(page);

  await login.abrir();

  await login.iniciarSesion(
    'correo@incorrecto.com',
    '123456'
  );

  await expect(
    page.getByText('Credenciales incorrectas')
  ).toBeVisible();
});