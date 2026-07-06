import { Page, Locator } from '@playwright/test';

export class ResultadosPage {
  readonly page: Page;
  readonly porcentajeSimilitud: Locator;
  readonly botonExportarPDF: Locator;
  readonly nivelRiesgo: Locator;

  constructor(page: Page) {
    this.page = page;
    // AJUSTAR: selectores del reporte de resultados
    this.porcentajeSimilitud = page.locator('[data-testid="porcentaje-similitud"]');
    this.botonExportarPDF = page.getByRole('button', { name: 'Exportar PDF' });
    this.nivelRiesgo = page.locator('[data-testid="nivel-riesgo"]');
  }

  async obtenerPorcentaje() {
    return await this.porcentajeSimilitud.textContent();
  }

  async exportarPDF() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.botonExportarPDF.click(),
    ]);
    return download;
  }
}