import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: './tests',
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    timeout: 30_000,
    expect: {
        timeout: 7_000,
    },

    reporter: [
        ['list'],
        ['html', {
            outputFolder: 'playwright-report',
            open: 'never'
        }]
    ],

    outputDir: 'test-results',

    use: {
        baseURL: process.env.BASE_URL,
        headless: false,
        trace: 'retain-on-failure',
        actionTimeout: 10_000,
        navigationTimeout: 15_000,
    },

    projects: [
        {
            name: 'setup',
            testMatch: '**/auth/login.spec.ts',
        },

        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                storageState: 'playwright/.auth/user.json',
            },
            dependencies: ['setup'],
            testIgnore: '**/auth/login.spec.ts',
        },
    ],
});