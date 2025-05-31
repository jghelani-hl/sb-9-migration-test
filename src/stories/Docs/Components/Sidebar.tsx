import React, { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
  type?: 'section' | 'link';
  isLast?: boolean;
}

interface SidebarProps {
  title?: string;
  items: NavItem[];
  className?: string;
  style?: React.CSSProperties;
}

export const Sidebar: React.FC<SidebarProps> = ({
  title = 'Contents',
  items,
  className = 'toc-sidebar',
  style = {},
}) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Setup intersection observer to track visible sections
    const observerOptions = {
      root: null, // Use viewport as root
      rootMargin: '-80px 0px -70% 0px', // Adjusted for better detection
      threshold: 0.1, // Trigger when at least 10% is visible
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the visible sections
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Sort by Y position to get the topmost visible section
        const sortedVisibleEntries = visibleEntries.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
        );

        // Get the ID of the first visible section
        const firstVisibleId = sortedVisibleEntries[0].target.id;
        setActiveSection(firstVisibleId);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe all section elements with IDs matching our sidebar items
    let foundSections = 0;
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
        foundSections++;
      }
    });

    // Set initial active section to first item if it exists
    if (items.length > 0 && !activeSection) {
      setActiveSection(items[0].id);
    }

    return () => {
      // Cleanup observer when component unmounts
      observer.disconnect();
    };
  }, [items, activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Set active immediately for better UI feedback
      setActiveSection(id);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={className}
      style={{
        position: 'sticky',
        top: '20px',
        alignSelf: 'flex-start',
        width: '250px',
        marginRight: '0px',
        padding: '15px',
        borderRadius: '5px',
        backgroundColor: '#f5f5f5',
        maxHeight: 'calc(100vh - 40px)',
        overflowY: 'auto',
        fontSize: '14px',
        flexShrink: 0,
        ...style,
      }}
    >
      <h3 style={{ marginTop: '0' }}>{title}</h3>
      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              marginBottom: item.isLast ? '0' : '8px',
              paddingLeft: item.type === 'section' ? '0' : '8px',
            }}
          >
            <button
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                color: activeSection === item.id ? '#0056b3' : '#1ea7fd',
                textDecoration: 'none',
                fontSize: '14px',
                textAlign: 'left',
                width: '100%',
                fontWeight: activeSection === item.id ? 'bold' : 'normal',
                transition: 'color 0.2s, font-weight 0.2s',
                position: 'relative',
                paddingLeft: '12px',
              }}
            >
              {activeSection === item.id && (
                <span
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '4px',
                    height: '14px',
                    backgroundColor: '#0056b3',
                    borderRadius: '2px',
                  }}
                />
              )}
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
