import { Page, Locator } from '@playwright/test';

export class ResumenPage {
  readonly page: Page;
  readonly textareaTexto: Locator;
  readonly botonGenerarResumen: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textareaTexto = page.locator('textarea').first();
    this.botonGenerarResumen = page.getByRole('button', { name: 'Generar Resumen con IA' });
  }

  async generarResumen(texto: string) {
    await this.textareaTexto.fill(texto);
    await this.botonGenerarResumen.click();
  }
}