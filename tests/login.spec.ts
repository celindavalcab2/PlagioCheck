import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('Login correcto', async ({ page }) => {

    const login = new LoginPage(page);

    await login.abrir();

    await login.iniciarSesion(
        'user@gmail.com',
        '123456789'
    );

    await expect(
        page.getByText('Bienvenido, Usuario Demo')
    ).toBeVisible();

});