import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ResumenPage } from './pages/ResumenPage';

test('CP-006: Generar resumen académico con IA', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const resumen = new ResumenPage(page);

  await login.abrir();
  await login.iniciarSesion('user@gmail.com', '123456789');

  await dashboard.irA(dashboard.menuResumenAcademico);
  await resumen.generarResumen('Este es un texto de prueba largo para generar un resumen académico usando inteligencia artificial.');

  await expect(page.getByText('Crea tu primer resumen académico')).not.toBeVisible({ timeout: 30000 });
});