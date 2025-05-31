import React from 'react';

import { Table, Th, Td } from './Table';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Table> = {
  title: 'Storybook Docs Components/Table',
  component: Table,
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Basic: Story = {
  render: () => (
    <Table>
      <thead>
        <tr>
          <Th>Feature</Th>
          <Th>Status</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>Feature A</Td>
          <Td>Complete</Td>
        </tr>
        <tr>
          <Td>Feature B</Td>
          <Td>Partial</Td>
        </tr>
      </tbody>
    </Table>
  ),
};
