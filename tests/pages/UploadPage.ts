import { Page, Locator } from '@playwright/test';
import path from 'path';

export class UploadPage {
  readonly page: Page;
  readonly inputArchivo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputArchivo = page.locator('input[type="file"]');
  }

  async subirArchivos(nombresArchivos: string[]) {
    const rutas = nombresArchivos.map(nombre =>
      path.join(__dirname, '..', 'fixtures', nombre)
    );
    await this.inputArchivo.setInputFiles(rutas);
  }
}