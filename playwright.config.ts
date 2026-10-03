import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '.',

  fullyParallel: true,

  use: {
    baseURL: 'https://journeyunchecked.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});