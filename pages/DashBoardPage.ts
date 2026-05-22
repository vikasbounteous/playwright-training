import type { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get header() {
    return this.page.getByRole('heading', { name: 'Dashboard' });
  }

  async goto(): Promise<void> {
    await this.clickMenuTab('Dashboard');
    await this.page.waitForURL('**/dashboard/**');
  }

  async expectLoaded(): Promise<void> {
    await this.header.waitFor({ state: 'visible' });
  }
}
