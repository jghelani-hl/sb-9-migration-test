import React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

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
      'These are the color variables available in the HL UI Library, grouped by color family.',
    children: (
      <div
        className="hl-ui-library"
        style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
      >
        {/* Grays */}
        <div>
          <h3 style={{ margin: '8px 0' }}>Grays</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '8px',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--hl-colors-grayDarkest)',
                color: '#fff',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-grayDarkest</div>
              <div style={{ fontSize: 12 }}>
                #444855
                <br />
                <span style={{ fontWeight: 400 }}>$darkest-gray</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-grayDark)',
                color: '#fff',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-grayDark</div>
              <div style={{ fontSize: 12 }}>
                #6F727C
                <br />
                <span style={{ fontWeight: 400 }}>$dark-gray</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-grayMedium)',
                color: '#fff',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-grayMedium</div>
              <div style={{ fontSize: 12 }}>
                #999BA2
                <br />
                <span style={{ fontWeight: 400 }}>$med-gray</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-grayLight)',
                color: '#444855',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-grayLight</div>
              <div style={{ fontSize: 12 }}>
                #C3C4C7
                <br />
                <span style={{ fontWeight: 400 }}>$lt-gray</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-grayLightest)',
                color: '#444855',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-grayLightest</div>
              <div style={{ fontSize: 12 }}>
                #DEDEDF
                <br />
                <span style={{ fontWeight: 400 }}>$ltest-gray</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-graySuperLight)',
                color: '#444855',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-graySuperLight</div>
              <div style={{ fontSize: 12 }}>
                #EFEFEF
                <br />
                <span style={{ fontWeight: 400 }}>$super-lt-gray</span>
              </div>
            </div>
          </div>
        </div>
        {/* Blues */}
        <div>
          <h3 style={{ margin: '8px 0' }}>Blues</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--hl-colors-blueMedium)',
                color: '#fff',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-blueMedium</div>
              <div style={{ fontSize: 12 }}>
                #307ABC
                <br />
                <span style={{ fontWeight: 400 }}>$med-blue</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-blueBright)',
                color: '#fff',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-blueBright</div>
              <div style={{ fontSize: 12 }}>
                #5CA2EC
                <br />
                <span style={{ fontWeight: 400 }}>$bright-blue</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-blueLight)',
                color: '#444855',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-blueLight</div>
              <div style={{ fontSize: 12 }}>
                #A5C8ED
                <br />
                <span style={{ fontWeight: 400 }}>$lt-blue</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-blueLightest)',
                color: '#444855',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-blueLightest</div>
              <div style={{ fontSize: 12 }}>
                #D6E8FA
                <br />
                <span style={{ fontWeight: 400 }}>$ltest-blue</span>
              </div>
            </div>
          </div>
        </div>
        {/* Oranges */}
        <div>
          <h3 style={{ margin: '8px 0' }}>Oranges</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--hl-colors-orangeHighlight)',
                color: '#fff',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-orangeHighlight</div>
              <div style={{ fontSize: 12 }}>
                #F58026
                <br />
                <span style={{ fontWeight: 400 }}>$hl-orange</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-orangeLight)',
                color: '#444855',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-orangeLight</div>
              <div style={{ fontSize: 12 }}>
                #FEB97C
                <br />
                <span style={{ fontWeight: 400 }}>$lt-orange</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-orangeLightest)',
                color: '#444855',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-orangeLightest</div>
              <div style={{ fontSize: 12 }}>
                #FCE1C8
                <br />
                <span style={{ fontWeight: 400 }}>$ltest-orange</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-orangeRed)',
                color: '#fff',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-orangeRed</div>
              <div style={{ fontSize: 12 }}>
                #F44123
                <br />
                <span style={{ fontWeight: 400 }}>$red-orange</span>
              </div>
            </div>
          </div>
        </div>
        {/* Corals */}
        <div>
          <h3 style={{ margin: '8px 0' }}>Corals</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '8px',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--hl-colors-coral)',
                color: '#fff',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-coral</div>
              <div style={{ fontSize: 12 }}>
                #F36750
                <br />
                <span style={{ fontWeight: 400 }}>$coral</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-coralLight)',
                color: '#444855',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-coralLight</div>
              <div style={{ fontSize: 12 }}>
                #F99888
                <br />
                <span style={{ fontWeight: 400 }}>$lt-coral</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-coralLightest)',
                color: '#444855',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-coralLightest</div>
              <div style={{ fontSize: 12 }}>
                #FCCFC8
                <br />
                <span style={{ fontWeight: 400 }}>$ltest-coral</span>
              </div>
            </div>
          </div>
        </div>
        {/* Greens */}
        <div>
          <h3 style={{ margin: '8px 0' }}>Greens</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '8px',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--hl-colors-greenLight)',
                color: '#444855',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-greenLight</div>
              <div style={{ fontSize: 12 }}>
                #B3E5CE
                <br />
                <span style={{ fontWeight: 400 }}>$lt-green</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-greenLightest)',
                color: '#444855',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-greenLightest</div>
              <div style={{ fontSize: 12 }}>
                #ECF8F3
                <br />
                <span style={{ fontWeight: 400 }}>$ltest-green</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'var(--hl-colors-greenMedium)',
                color: '#fff',
                padding: '8px',
                borderRadius: '6px',
                fontSize: 13,
                minWidth: 0,
              }}
            >
              <div style={{ fontWeight: 600 }}>--hl-colors-greenMedium</div>
              <div style={{ fontSize: 12 }}>
                #67CC9D
                <br />
                <span style={{ fontWeight: 400 }}>$med-green</span>
              </div>
            </div>
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

// Shadow variables demo
export const Shadows: Story = {
  args: {
    title: 'Shadow Variables',
    description:
      'These are the shadow variables available in the HL UI Library. Use them for consistent elevation and surface effects.',
    children: (
      <div
        className="hl-ui-library"
        style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}
      >
        {[
          {
            name: '--hl-shadow-default',
            desc: 'Default',
            style: { boxShadow: 'var(--hl-shadow-default)' },
          },
          {
            name: '--hl-shadow-hover',
            desc: 'Hover',
            style: { boxShadow: 'var(--hl-shadow-hover)' },
          },
          {
            name: '--hl-shadow-medium',
            desc: 'Medium',
            style: { boxShadow: 'var(--hl-shadow-medium)' },
          },
          {
            name: '--hl-shadow-side',
            desc: 'Side',
            style: { boxShadow: 'var(--hl-shadow-side)' },
          },
          {
            name: '--hl-shadow-dropdown',
            desc: 'Dropdown',
            style: { boxShadow: 'var(--hl-shadow-dropdown)' },
          },
          {
            name: '--hl-shadow-focus-success',
            desc: 'Focus Success',
            style: { boxShadow: 'var(--hl-shadow-focus-success)' },
          },
          {
            name: '--hl-shadow-none',
            desc: 'None',
            style: { boxShadow: 'var(--hl-shadow-none)' },
          },
        ].map(({ name, desc, style }) => (
          <div
            key={name}
            style={{
              ...style,
              width: 120,
              height: 60,
              background: '#fff',
              borderRadius: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 13,
              marginBottom: 8,
            }}
          >
            <div style={{ fontWeight: 600 }}>{desc}</div>
            <div style={{ fontSize: 12 }}>{name}</div>
          </div>
        ))}
      </div>
    ),
  },
};
