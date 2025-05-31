import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

// Create a simple component to display style variables
const StylesDemo = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <div style={{ fontFamily: 'sans-serif' }}>
    <h2>{title}</h2>
    <p>{description}</p>
    <div>{children}</div>
  </div>
);

const meta: Meta<typeof StylesDemo> = {
  title: 'Styles/CSS Variables',
  component: StylesDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'styles'],
};

export default meta;

type Story = StoryObj<typeof StylesDemo>;

// Color variables demo
export const Colors: Story = {
  args: {
    title: 'Color Variables',
    description:
      'These are the color variables available in the HL UI Library.',
    children: (
      <div className="hl-ui-library">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--hl-colors-primary)',
              color: 'white',
              padding: '16px',
              borderRadius: '4px',
            }}
          >
            --hl-colors-primary: #307ABC
          </div>
          <div
            style={{
              backgroundColor: 'var(--hl-colors-secondary)',
              color: 'white',
              padding: '16px',
              borderRadius: '4px',
            }}
          >
            --hl-colors-secondary: #6F727C
          </div>
          <div
            style={{
              backgroundColor: 'var(--hl-colors-tertiary)',
              color: 'white',
              padding: '16px',
              borderRadius: '4px',
            }}
          >
            --hl-colors-tertiary: #5CA2EC
          </div>
          <div
            style={{
              backgroundColor: 'var(--hl-colors-success)',
              color: 'white',
              padding: '16px',
              borderRadius: '4px',
            }}
          >
            --hl-colors-success: #67CC9D
          </div>
          <div
            style={{
              backgroundColor: 'var(--hl-colors-warning)',
              color: 'white',
              padding: '16px',
              borderRadius: '4px',
            }}
          >
            --hl-colors-warning: #F58026
          </div>
          <div
            style={{
              backgroundColor: 'var(--hl-colors-danger)',
              color: 'white',
              padding: '16px',
              borderRadius: '4px',
            }}
          >
            --hl-colors-danger: #F44123
          </div>
        </div>
      </div>
    ),
  },
};

// Typography variables demo
export const Typography: Story = {
  args: {
    title: 'Typography Variables',
    description:
      'These are the typography variables available in the HL UI Library.',
    children: (
      <div className="hl-ui-library">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h2>Font Sizes</h2>
            <div style={{ fontSize: 'var(--hl-font-size-small)' }}>
              Small text (--hl-font-size-small: 12px)
            </div>
            <div style={{ fontSize: 'var(--hl-font-size-medium)' }}>
              Medium text (--hl-font-size-medium: 16px)
            </div>
            <div style={{ fontSize: 'var(--hl-font-size-large)' }}>
              Large text (--hl-font-size-large: 20px)
            </div>
          </div>
          <div>
            <h2>Font Weights</h2>
            <div style={{ fontWeight: 'var(--hl-font-weight-light)' }}>
              Light weight (--hl-font-weight-light: 300)
            </div>
            <div style={{ fontWeight: 'var(--hl-font-weight-regular)' }}>
              Regular weight (--hl-font-weight-regular: 400)
            </div>
            <div style={{ fontWeight: 'var(--hl-font-weight-medium)' }}>
              Medium weight (--hl-font-weight-medium: 500)
            </div>
            <div style={{ fontWeight: 'var(--hl-font-weight-bold)' }}>
              Bold weight (--hl-font-weight-bold: 700)
            </div>
          </div>
        </div>
      </div>
    ),
  },
};

// Spacing variables demo
export const Spacing: Story = {
  args: {
    title: 'Spacing Variables',
    description:
      'These are the spacing variables available in the HL UI Library.',
    children: (
      <div className="hl-ui-library">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              padding: 'var(--hl-spacing-small)',
              backgroundColor: '#f0f0f0',
              border: '1px dashed #ccc',
            }}
          >
            Small spacing (--hl-spacing-small: 8px)
          </div>
          <div
            style={{
              padding: 'var(--hl-spacing-medium)',
              backgroundColor: '#f0f0f0',
              border: '1px dashed #ccc',
            }}
          >
            Medium spacing (--hl-spacing-medium: 16px)
          </div>
          <div
            style={{
              padding: 'var(--hl-spacing-large)',
              backgroundColor: '#f0f0f0',
              border: '1px dashed #ccc',
            }}
          >
            Large spacing (--hl-spacing-large: 24px)
          </div>
          <div
            style={{
              padding: 'var(--hl-spacing-xLarge)',
              backgroundColor: '#f0f0f0',
              border: '1px dashed #ccc',
            }}
          >
            Extra large spacing (--hl-spacing-xLarge: 32px)
          </div>
        </div>
      </div>
    ),
  },
};

// Border radius variables demo
export const BorderRadius: Story = {
  args: {
    title: 'Border Radius Variables',
    description:
      'These are the border radius variables available in the HL UI Library.',
    children: (
      <div className="hl-ui-library">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              padding: '16px',
              backgroundColor: '#f0f0f0',
              borderRadius: 'var(--hl-border-radius-small)',
            }}
          >
            Small border radius (--hl-border-radius-small: 4px)
          </div>
          <div
            style={{
              padding: '16px',
              backgroundColor: '#f0f0f0',
              borderRadius: 'var(--hl-border-radius-medium)',
            }}
          >
            Medium border radius (--hl-border-radius-medium: 8px)
          </div>
          <div
            style={{
              padding: '16px',
              backgroundColor: '#f0f0f0',
              borderRadius: 'var(--hl-border-radius-large)',
            }}
          >
            Large border radius (--hl-border-radius-large: 12px)
          </div>
        </div>
      </div>
    ),
  },
};
