import { FC, useState } from 'react';

interface CollapsibleProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}
export const Collapsible: FC<CollapsibleProps> = ({
  title,
  defaultOpen = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '6px',
        marginBottom: '16px',
        overflow: 'hidden',
        backgroundColor: 'white',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '12px 16px',
          backgroundColor: '#f9f9f9',
          border: 'none',
          borderBottom: isOpen ? '1px solid #e0e0e0' : 'none',
          textAlign: 'left',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#333',
        }}
      >
        <span>{title}</span>
        <span
          style={{
            transition: 'transform 0.3s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            display: 'inline-block',
            marginLeft: '8px',
          }}
        >
          ▼
        </span>
      </button>
      <div
        style={{
          padding: isOpen ? '16px' : '0 16px', // Keep horizontal padding
          maxHeight: isOpen ? '5000px' : '0', // Adjust max-height as needed
          opacity: isOpen ? 1 : 0,
          transition: 'all 0.3s ease-out',
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  );
};
