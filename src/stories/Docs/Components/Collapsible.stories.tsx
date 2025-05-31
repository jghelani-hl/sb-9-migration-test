import React from 'react';

import { Collapsible } from './Collapsible';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Collapsible> = {
  title: 'Storybook Docs Components/Collapsible',
  component: Collapsible,
};
export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Basic: Story = {
  args: {
    title: 'More Information',
    children: <div>This content is hidden by default and can be expanded.</div>,
  },
};

export const DefaultOpen: Story = {
  args: {
    title: 'Open by Default',
    defaultOpen: true,
    children: <div>This content is visible by default.</div>,
  },
};
