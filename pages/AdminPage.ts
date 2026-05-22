import { expect, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AdminPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get usernameInput() {
    return this.page
      .locator('.oxd-input-group', {
        has: this.page.locator('label', { hasText: 'Username' }),
      })
      .locator('input')
      .first();
  }

  get searchButton() {
    return this.page.getByRole('button', { name: 'Search' });
  }

  get recordsTable() {
    return this.page.locator('.oxd-table-body');
  }

  async goto(): Promise<void> {
    await this.clickMenuTab('Admin');
    await this.page.waitForURL('**/admin/viewSystemUsers');
  }

  async searchUser(username: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.searchButton.click();
  }

  async expectRecordsVisible(): Promise<void> {
    await expect(this.recordsTable).toBeVisible();
  }
}
