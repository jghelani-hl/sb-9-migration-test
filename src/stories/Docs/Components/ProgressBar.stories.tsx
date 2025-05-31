import { ProgressBar } from './ProgressBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressBar> = {
  title: 'Storybook Docs Components/ProgressBar',
  component: ProgressBar,
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    completed: 3,
    total: 5,
    title: 'Progress',
  },
};

export const WithStatusCounts: Story = {
  args: {
    statusCounts: { complete: 2, partial: 1, missing: 2 },
    title: 'Feature Progress',
  },
};
