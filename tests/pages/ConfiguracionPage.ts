import { Page, Locator } from '@playwright/test';

export class ConfiguracionPage {
  readonly page: Page;
  readonly inputNombre: Locator;
  readonly botonActualizarPerfil: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputNombre = page.locator('#name');
    this.botonActualizarPerfil = page.getByRole('button', { name: 'Actualizar Perfil' });
  }

  async actualizarNombre(nuevoNombre: string) {
    await this.inputNombre.fill(nuevoNombre);
    await this.botonActualizarPerfil.click();
  }
}