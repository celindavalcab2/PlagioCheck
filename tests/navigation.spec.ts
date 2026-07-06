import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';

test('CP-003: Navegación entre módulos', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await login.abrir();
  await login.iniciarSesion('user@gmail.com', '123456789');

  await dashboard.irA(dashboard.menuResultados);
  await expect(page.getByRole('heading', { name: 'Resultados', exact: true })).toBeVisible();

  await dashboard.irA(dashboard.menuConfiguracion);
  await expect(page.getByRole('heading', { name: 'Configuración', exact: true })).toBeVisible();

  await dashboard.irA(dashboard.menuSubirDocumento);
  await expect(page.getByRole('heading', { name: 'Subir Documentos', exact: true })).toBeVisible();
});