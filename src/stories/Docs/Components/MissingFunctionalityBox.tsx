import React from 'react';

interface MissingFunctionalityBoxProps {
  title?: string;
  items: string[];
  style?: React.CSSProperties;
}

export const MissingFunctionalityBox: React.FC<
  MissingFunctionalityBoxProps
> = ({ title = 'Missing Functionality', items, style = {} }) => (
  <div
    style={{
      background: '#fff3cd',
      border: '1px solid #ffeeba',
      borderRadius: '6px',
      padding: '12px 18px',
      marginBottom: '12px',
      color: '#856404',
      fontSize: '15px',
      fontWeight: 500,
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      ...style,
    }}
  >
    <span style={{ fontWeight: 600 }}>{title}</span>
    <ul style={{ margin: 0, paddingLeft: '18px' }}>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);
