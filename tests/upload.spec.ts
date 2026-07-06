import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { UploadPage } from './pages/UploadPage';

test('CP-004: Subir documentos válidos', async ({ page }) => {
  const login = new LoginPage(page);
  const upload = new UploadPage(page);

  await login.abrir();
  await login.iniciarSesion('user@gmail.com', '123456789');

  await upload.subirArchivos(['documento-prueba.pdf', 'documento-prueba-2.pdf']);

  // Verificamos que el input recibió los archivos
  const files = await upload.inputArchivo.evaluate((el: HTMLInputElement) => el.files?.length);
  expect(files).toBe(2);
});