import { within, expect } from 'storybook/test';

import { Avatar } from './Avatar';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const CircleImage: Story = {
  args: {
    shape: 'circle',
    size: 40,
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
    alt: 'User',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByTestId('avatar-circle');
    expect(avatar).toBeInTheDocument();
    const img = canvas.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('randomuser'));
  },
};

export const SquareImage: Story = {
  args: {
    shape: 'square',
    size: 40,
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    alt: 'User',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByTestId('avatar-square');
    expect(avatar).toBeInTheDocument();
    const img = canvas.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('randomuser'));
  },
};

export const Initials: Story = {
  args: {
    shape: 'circle',
    size: 40,
    children: 'AB',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByTestId('avatar-circle');
    expect(avatar).toBeInTheDocument();
    expect(canvas.getByText('AB')).toBeInTheDocument();
  },
};
