
import { test } from '../fixtures/authFixture';

test.describe('OrangeHRM Admin flow', () => {
    test.beforeAll(async () => Promise.resolve().then(() => console.log('Running before each test in Admin flow')));{
    }
 
    test.afterAll(async () => Promise.resolve().then(() => console.log('Running after each test in Admin flow')));{
    }

    // test.beforeEach(async () => Promise.resolve().then(()=>console.log('Before each test'))); 
    // test.afterEach(async () => Promise.resolve().then(()=>console.log('After each test')));

  test('@smoke searches for an admin user', async ({ dashboardPage, adminPage }) => {
    await dashboardPage.expectLoaded();
    // await adminPage.goto();
    await adminPage.clickMenuTab('Admin');
    await adminPage.searchUser('Admin');
    await adminPage.expectRecordsVisible();
  });
  test('@smoke searches for ABC user', async ({ dashboardPage, adminPage }) => {
    await dashboardPage.expectLoaded();
    // await adminPage.goto();
    await adminPage.clickMenuTab('Admin');
    await adminPage.searchUser('ABC');
    await adminPage.expectRecordsVisible();
  });
  test(' searches for XYZ user', async ({ dashboardPage, adminPage }) => {
    await dashboardPage.expectLoaded();
    // await adminPage.goto();
    await adminPage.clickMenuTab('Admin');
    await adminPage.searchUser('XYZ');
    await adminPage.expectRecordsVisible();
  });
});
