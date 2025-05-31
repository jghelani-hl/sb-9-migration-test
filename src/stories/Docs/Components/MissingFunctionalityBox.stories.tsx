import { MissingFunctionalityBox } from './MissingFunctionalityBox';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MissingFunctionalityBox> = {
  title: 'Storybook Docs Components/MissingFunctionalityBox',
  component: MissingFunctionalityBox,
};
export default meta;

type Story = StoryObj<typeof MissingFunctionalityBox>;

export const Basic: Story = {
  args: {
    title: 'Missing Features',
    items: ['Feature A is not yet implemented', 'Feature B is planned'],
  },
};
