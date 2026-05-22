import type { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get usernameInput() {
    return this.page.locator('input[name="username"]');
  }

  get passwordInput() {
    return this.page.locator('input[name="password"]');
  }

  get loginButton() {
    return this.page.getByRole('button', { name: 'Login' });
  }

  async goto(): Promise<void> {
    await this.navigate('/web/index.php/auth/login');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForURL('**/dashboard/**');
  }
}
