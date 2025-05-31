import { Status } from './Status';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Status> = {
  title: 'Storybook Docs Components/Status',
  component: Status,
};
export default meta;

type Story = StoryObj<typeof Status>;

export const Complete: Story = {
  args: { type: 'complete' },
};

export const Partial: Story = {
  args: { type: 'partial' },
};

export const Missing: Story = {
  args: { type: 'missing' },
};

export const Implemented: Story = {
  args: { type: 'implemented' },
};
