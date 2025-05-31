import React, { useState, ReactNode } from 'react';

import { Sidebar } from './Sidebar';
import { initialStyleContext } from '../../../styles/StyleContext/initialStyleContext';

interface NavItem {
  id: string;
  label: string;
  type?: 'section' | 'link';
  isLast?: boolean;
}

interface DocLayoutProps {
  /** The title to be displayed in the sidebar */
  sidebarTitle?: string;
  /** The items to be displayed in the sidebar */
  sidebarItems: NavItem[];
  /** The content to be displayed in the main content area */
  children: ReactNode;
  /** Optional CSS class name for additional styling */
  className?: string;
  /** Optional additional styles */
  style?: React.CSSProperties;
}

/**
 * DocLayout is a reusable component that provides a responsive layout for documentation pages.
 * It renders a sidebar on the left and content on the right on larger screens,
 * and switches to a single column layout on smaller screens.
 */
export const DocLayout: React.FC<DocLayoutProps> = ({
  sidebarTitle = 'Contents',
  sidebarItems,
  children,
  className = '',
  style = {},
}) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const mobileBreakpoint = initialStyleContext.breakpoints.tablet;

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <style>
        {`
          .doc-layout {
            display: flex;
            position: relative;
            gap: 24px;
            width: 100%;
            max-width: 100%;
          }

          .doc-layout__content {
            flex: 1;
            min-width: 0;
            max-width: 100%;
          }

          .doc-layout__content pre {
            max-width: 100%;
            overflow-x: auto;
            margin: 1em 0;
          }

          .doc-layout__content code {
            word-break: break-word;
            white-space: pre-wrap;
          }

          .doc-layout__content .sbdocs-pre {
            max-width: 100%;
            overflow-x: auto;
          }

          .doc-layout__sidebar-toggle {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            width: 50px;
            height: 50px;
            border-radius: 25px;
            background-color: ${initialStyleContext.colors.primary};
            color: white;
            border: none;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            align-items: center;
            justify-content: center;
            font-size: 20px;
          }

          .doc-layout__sidebar {
            display: block;
          }

          /* Media query for smaller screens */
          @media (max-width: ${mobileBreakpoint}) {
            .doc-layout {
              flex-direction: column;
            }

            .doc-layout__sidebar-toggle {
              display: flex;
            }

            .doc-layout__sidebar {
              display: none;
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 999;
              width: 100%;
              max-width: 300px;
              margin: 0;
              padding: 20px;
              background-color: white;
              box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
              overflow-y: auto;
            }

            .doc-layout__sidebar--visible {
              display: block;
            }

            .doc-layout__overlay {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: rgba(0, 0, 0, 0.5);
              z-index: 998;
            }

            .doc-layout__sidebar-close {
              position: absolute;
              top: 10px;
              right: 10px;
              background: none;
              border: none;
              font-size: 24px;
              cursor: pointer;
              color: ${initialStyleContext.colors.secondary};
            }
          }
        `}
      </style>

      <div className={`doc-layout ${className}`} style={style}>
        <div
          className={`doc-layout__sidebar ${isSidebarVisible ? 'doc-layout__sidebar--visible' : ''}`}
        >
          {isSidebarVisible && (
            <button
              className="doc-layout__sidebar-close"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              ×
            </button>
          )}
          <Sidebar
            title={sidebarTitle}
            items={sidebarItems}
            style={{ position: 'sticky', top: '20px' }}
          />
        </div>

        {isSidebarVisible && (
          <div className="doc-layout__overlay" onClick={toggleSidebar} />
        )}

        <div className="doc-layout__content">{children}</div>

        <button
          className="doc-layout__sidebar-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
      </div>
    </>
  );
};
