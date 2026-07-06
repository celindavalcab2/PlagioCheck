import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.email = page.locator('#email');
    this.password = page.locator('#password');
    this.loginButton = page.getByRole('button', {
      name: 'Iniciar Sesión'
    });
  }

  async abrir() {
    await this.page.goto('http://localhost:3000/login');
}

  async iniciarSesion(usuario: string, clave: string) {
    await this.email.fill(usuario);
    await this.password.fill(clave);
    await this.loginButton.click();
  }
}