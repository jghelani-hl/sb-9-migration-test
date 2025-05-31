import React from 'react';

import { StyleContextProvider } from '../src/styles/StyleContext/StyleContext';
import type { Preview } from '@storybook/react-vite';
import '../src/styles/global.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StyleContextProvider>
        <div className="hl-ui-library">
          <Story />
        </div>
      </StyleContextProvider>
    ),
  ],
};

export default preview;
