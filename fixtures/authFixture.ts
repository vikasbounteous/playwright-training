import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashBoardPage';
import { AdminPage } from '../pages/AdminPage';
import { adminUser } from '../data/logintestData';

export type Fixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  adminPage: AdminPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(adminUser.username, adminUser.password);
    await use(new DashboardPage(page));
  },

  adminPage: async ({ dashboardPage, page }, use) => {
    // dashboardPage fixture ensures we are logged in
    await dashboardPage.expectLoaded();
    await use(new AdminPage(page));
  },
});

export { expect } from '@playwright/test';
