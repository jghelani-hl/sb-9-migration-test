import { Sidebar } from './Sidebar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {
  title: 'Storybook Docs Components/Sidebar',
  component: Sidebar,
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Basic: Story = {
  args: {
    title: 'Contents',
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'usage', label: 'Usage', type: 'section' },
      { id: 'api', label: 'API Reference', isLast: true, type: 'section' },
    ],
  },
};
