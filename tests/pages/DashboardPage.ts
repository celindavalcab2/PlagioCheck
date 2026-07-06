import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly menuSubirDocumento: Locator;
  readonly menuResultados: Locator;
  readonly menuResumenAcademico: Locator;
  readonly menuGenerarMapa: Locator;
  readonly menuModoPresentacion: Locator;
  readonly menuConfiguracion: Locator;
  readonly botonCerrarSesion: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuSubirDocumento = page.getByRole('button', { name: 'Subir Documentos', exact: true });
    this.menuResultados = page.getByRole('button', { name: 'Resultados', exact: true });
    this.menuResumenAcademico = page.getByRole('button', { name: 'Resumen Academico', exact: true });
    this.menuGenerarMapa = page.getByRole('button', { name: 'Generarar Mapa', exact: true });
    this.menuModoPresentacion = page.getByRole('button', { name: 'Modo presentación', exact: true });
    this.menuConfiguracion = page.getByRole('button', { name: 'Configuración', exact: true });
    this.botonCerrarSesion = page.getByText('Cerrar Sesión', { exact: true });
  }

  async irA(seccion: Locator) {
    await seccion.click();
  }

  async cerrarSesion() {
    await this.botonCerrarSesion.click();
  }
}