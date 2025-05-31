import React from 'react';

import { DocLayout } from './DocLayout';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DocLayout> = {
  title: 'Storybook Docs Components/DocLayout',
  component: DocLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof DocLayout>;

export const Basic: Story = {
  args: {
    sidebarTitle: 'Documentation',
    sidebarItems: [
      { id: 'overview', label: 'Overview' },
      { id: 'usage', label: 'Usage', type: 'section' },
      { id: 'props', label: 'Props', type: 'section' },
      { id: 'examples', label: 'Examples', type: 'section' },
      {
        id: 'best-practices',
        label: 'Best Practices',
        isLast: true,
        type: 'section',
      },
    ],
  },
  render: (args) => (
    <DocLayout {...args}>
      <h1 id="overview">DocLayout Component</h1>

      <p>
        This component provides a responsive layout for documentation pages with
        a sidebar navigation and main content area.
      </p>

      <h2 id="usage">Usage</h2>
      <p>
        The DocLayout component is designed to be used in documentation pages,
        providing a consistent layout with a sidebar for navigation and a main
        content area for displaying information.
      </p>

      <h2 id="props">Props</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th
              style={{
                textAlign: 'left',
                padding: '8px',
                borderBottom: '2px solid #eee',
              }}
            >
              Prop
            </th>
            <th
              style={{
                textAlign: 'left',
                padding: '8px',
                borderBottom: '2px solid #eee',
              }}
            >
              Type
            </th>
            <th
              style={{
                textAlign: 'left',
                padding: '8px',
                borderBottom: '2px solid #eee',
              }}
            >
              Default
            </th>
            <th
              style={{
                textAlign: 'left',
                padding: '8px',
                borderBottom: '2px solid #eee',
              }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              sidebarTitle
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              string
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              "Contents"
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              The title displayed in the sidebar
            </td>
          </tr>
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              sidebarItems
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              NavItem[]
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              Required
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              Array of items to display in the sidebar
            </td>
          </tr>
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              children
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              ReactNode
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              Required
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              Content to display in the main area
            </td>
          </tr>
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              className
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              string
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              " "
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              Additional CSS class for styling
            </td>
          </tr>
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              style
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              CSSProperties
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              {'{}'}
            </td>
            <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              Additional inline styles
            </td>
          </tr>
        </tbody>
      </table>

      <h2 id="examples">Examples</h2>
      <p>
        Resize your browser window to see how the layout adapts to different
        screen sizes. On smaller screens, the sidebar will collapse and a toggle
        button will appear in the bottom right corner.
      </p>

      <h2 id="best-practices">Best Practices</h2>
      <ol>
        <li>
          Make sure each heading in your content has a corresponding ID that
          matches the ID in your sidebar items for proper navigation.
        </li>
        <li>
          Use hierarchical heading levels (h1, h2, h3, etc.) to create a clear
          content structure.
        </li>
        <li>
          For MDX files, make sure to import the DocLayout component at the top:
          <pre>
            {`import { DocLayout } from '../../../stories/Docs/Components/DocLayout';`}
          </pre>
        </li>
        <li>
          When creating sidebar items, set 'isLast: true' on the last item to
          ensure proper styling.
        </li>
      </ol>
    </DocLayout>
  ),
};

export const WithCustomStyling: Story = {
  args: {
    sidebarTitle: 'Custom Styling',
    sidebarItems: [
      { id: 'section1', label: 'Section 1' },
      { id: 'section2', label: 'Section 2', type: 'section' },
      { id: 'section3', label: 'Section 3', isLast: true, type: 'section' },
    ],
    className: 'custom-doc-layout',
    style: { background: '#f8f9fa', padding: '20px', borderRadius: '8px' },
  },
  render: (args) => (
    <>
      <style>
        {`
          .custom-doc-layout .doc-layout__sidebar {
            background-color: #2c3e50;
            color: white;
          }

          .custom-doc-layout .doc-layout__sidebar h3 {
            color: white;
          }

          .custom-doc-layout .doc-layout__sidebar button {
            color: #ecf0f1;
          }

          .custom-doc-layout .doc-layout__sidebar button:hover {
            color: #3498db;
          }
        `}
      </style>
      <DocLayout {...args}>
        <h1 id="section1">Custom Styled DocLayout</h1>
        <p>
          This example demonstrates how to apply custom styling to the DocLayout
          component.
        </p>

        <h2 id="section2">Section 2</h2>
        <p>
          You can customize the appearance using className and the style prop.
        </p>

        <h2 id="section3">Section 3</h2>
        <p>
          Additionally, you can use CSS to target specific elements within the
          component.
        </p>
      </DocLayout>
    </>
  ),
};
