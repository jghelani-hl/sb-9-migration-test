import { ComparisonView } from './ComparisonView';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ComparisonView> = {
  title: 'Storybook Docs Components/ComparisonView',
  component: ComparisonView,
};
export default meta;

type Story = StoryObj<typeof ComparisonView>;

export const Basic: Story = {
  args: {
    title: 'Feature Comparison',
    original: 'Original implementation details...',
    current: 'Current implementation details...',
    originalTitle: 'Original',
    currentTitle: 'Current',
  },
};

export const CustomTitles: Story = {
  args: {
    title: 'API Comparison',
    original: 'Old API: fetchData()',
    current: 'New API: useData()',
    originalTitle: 'Old API',
    currentTitle: 'New API',
  },
};
