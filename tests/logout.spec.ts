import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';

test('CP-008: Cerrar sesión correctamente', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await login.abrir();
  await login.iniciarSesion('user@gmail.com', '123456789');
  await dashboard.cerrarSesion();

  await expect(page).toHaveURL(/login/); // AJUSTAR ruta de login
});