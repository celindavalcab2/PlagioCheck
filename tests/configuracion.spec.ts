import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ConfiguracionPage } from './pages/ConfiguracionPage';

test('CP-007: Actualizar configuración de perfil', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const config = new ConfiguracionPage(page);

  await login.abrir();
  await login.iniciarSesion('user@gmail.com', '123456789');

  await dashboard.irA(dashboard.menuConfiguracion);
  await config.actualizarNombre('Nombre Actualizado QA');

  await expect(config.inputNombre).toHaveValue('Nombre Actualizado QA');
});