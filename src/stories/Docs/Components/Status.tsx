import { FC } from 'react';

interface StatusProps {
  type: 'complete' | 'partial' | 'missing' | 'implemented';
}

export const Status: FC<StatusProps> = ({ type }) => {
  const statusMap = {
    complete: {
      label: 'Complete',
      color: '#2E7D32', // Dark Green
      backgroundColor: '#E8F5E9', // Light Green
      borderColor: '#A5D6A7', // Medium Green
      icon: '✅',
    },
    partial: {
      label: 'Partial',
      color: '#E65100', // Dark Orange
      backgroundColor: '#FFF3E0', // Light Orange
      borderColor: '#FFCC80', // Medium Orange
      icon: '🌓', // Using a moon phase for partial
    },
    missing: {
      label: 'Missing',
      color: '#C62828', // Dark Red
      backgroundColor: '#FFEBEE', // Light Red
      borderColor: '#EF9A9A', // Medium Red
      icon: '❌',
    },
    implemented: {
      label: 'Implemented', // Storybook status
      color: '#1565C0', // Dark Blue
      backgroundColor: '#E3F2FD', // Light Blue
      borderColor: '#90CAF9', // Medium Blue
      icon: '📘', // Book icon for docs/stories
    },
  };

  const currentStatus = statusMap[type] || statusMap['missing']; // Fallback to missing

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 8px',
        borderRadius: '12px', // Pill shape
        border: `1px solid ${currentStatus.borderColor}`,
        backgroundColor: currentStatus.backgroundColor,
        color: currentStatus.color,
        fontWeight: 500,
        fontSize: '12px',
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{ marginRight: '5px', fontSize: '11px' }}>
        {currentStatus.icon}
      </span>
      <span>{currentStatus.label}</span>
    </span>
  );
};
