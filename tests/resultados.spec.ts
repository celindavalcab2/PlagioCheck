import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { UploadPage } from './pages/UploadPage';

test('CP-005: Subir documentos y ver interfaz de resultados', async ({ page }) => {
  const login = new LoginPage(page);
  const upload = new UploadPage(page);

  await login.abrir();
  await login.iniciarSesion('user@gmail.com', '123456789');

  await upload.subirArchivos(['documento-prueba.pdf', 'documento-prueba-2.pdf']);

  await page.waitForTimeout(2000); // pausa para que cargue
  await page.screenshot({ path: 'test-results/despues-de-subir.png', fullPage: true });
});