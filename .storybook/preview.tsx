import React from 'react';

import { StyleContextProvider } from '../src/styles/StyleContext/StyleContext';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react-vite';
import '../src/styles/global.scss';
import { initialStyleContext } from '../src/styles/StyleContext/initialStyleContext';
import HLThemeLight, { HLThemeDark } from './HLTheme';
import { addons } from 'storybook/preview-api';
import { DocsContainer } from '@storybook/addon-docs';

import {
  DARK_MODE_EVENT_NAME,
  UPDATE_DARK_MODE_EVENT_NAME,
} from '@vueless/storybook-dark-mode';

const channel = addons.getChannel();

const preview: Preview = {
  parameters: {
    a11y: { test: 'error' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: HLThemeDark,
      light: HLThemeLight,
      current: 'dark',
    },
    docs: {
      codePanel: true,
      container: (props) => {
        const [isDark, setDark] = React.useState();

        React.useEffect(() => {
          channel.on(DARK_MODE_EVENT_NAME, setDark);
          return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
        }, [channel, setDark]);

        return (
          <div>
            <DocsContainer
              {...props}
              theme={isDark ? HLThemeDark : HLThemeLight}
            />
          </div>
        );
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        default: initialStyleContext,
        iz: {
          ...initialStyleContext,
          colors: {
            ...initialStyleContext.colors,
            grayDarkest: '#fff',
          },
        },
        oc: {
          ...initialStyleContext,
          colors: {
            ...initialStyleContext.colors,
            grayDarkest: '#fff',
          },
        },
      },
      defaultTheme: 'default',
      Provider: StyleContextProvider,
    }),
    (Story) => (
      <div className="hl-ui-library">
        <Story />
      </div>
    ),
  ],
  initialGlobals: {
    theme: 'default',
  },
};

export default preview;
