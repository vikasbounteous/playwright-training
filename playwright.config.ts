import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  fullyParallel: false,
  reporter:[['html', { open: 'never' }]],
  use: {
    // baseURL: 'https://opensource-demo.orangehrmlive.com',
    baseURL: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com',
    headless: true,
    ignoreHTTPSErrors: true,

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    // video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
