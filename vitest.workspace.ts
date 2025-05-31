import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  defineWorkspace,
  defineProject,
  defineConfig,
  coverageConfigDefaults,
  mergeConfig,
} from 'vitest/config';

import viteConfig from './vite.config';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const storybookConfig = defineProject({
  test: {
    name: 'storybook',
    browser: {
      enabled: true,
      headless: true,
      name: 'chromium',
      provider: 'playwright',
      instances: [{ browser: 'chromium' }],
    },
    setupFiles: ['.storybook/vitest.setup.ts'],
  },
});

const testConfig = defineConfig({
  plugins: [
    // The plugin will run tests for the stories defined in your Storybook config
    // See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
    storybookTest({ configDir: path.join(dirname, '.storybook') }),
  ],
  test: {
    ...storybookConfig.test,
  },
});

const config = mergeConfig(viteConfig, testConfig);

const workspaceConfig = defineWorkspace(['vite.config.ts', config]);

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default workspaceConfig;
