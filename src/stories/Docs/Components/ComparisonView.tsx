import { FC } from 'react';

interface ComparisonViewProps {
  title: string;
  original: string;
  current: string;
  originalTitle: string;
  currentTitle: string;
}

export const ComparisonView: FC<ComparisonViewProps> = ({
  title,
  original,
  current,
  originalTitle,
  currentTitle,
}) => (
  <div
    style={{
      marginBottom: '24px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: '#fff',
    }}
  >
    <div
      style={{
        backgroundColor: '#f5f5f5',
        padding: '10px 16px',
        borderBottom: '1px solid #e0e0e0',
        fontWeight: '600',
        fontSize: '15px',
        color: '#333',
      }}
    >
      {title}
    </div>
    <div
      style={{
        display: 'grid', // Use grid for layout
        gridTemplateColumns: '1fr 1fr', // Two equal columns
        gap: '0px', // No gap initially
      }}
    >
      <div
        style={{
          padding: '16px',
          borderRight: '1px solid #e0e0e0',
        }}
      >
        <div
          style={{
            fontSize: '13px',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#555',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {originalTitle}
        </div>
        <div style={{ fontSize: '14px', lineHeight: '1.6' }}>{original}</div>
      </div>
      <div
        style={{
          padding: '16px',
        }}
      >
        <div
          style={{
            fontSize: '13px',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#555',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {currentTitle}
        </div>
        <div style={{ fontSize: '14px', lineHeight: '1.6' }}>{current}</div>
      </div>
    </div>
  </div>
);
