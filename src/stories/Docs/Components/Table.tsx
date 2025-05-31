import { FC } from 'react';

interface BaseTableProps {
  children: React.ReactNode;
}

interface TableProps extends BaseTableProps {
  style?: React.CSSProperties;
  column?: string;
}

export const Table: FC<BaseTableProps> = ({ children }) => (
  <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
    <table
      style={{
        width: '100%',
        minWidth: 700,
        borderCollapse: 'collapse',
        marginBottom: '1.5rem',
        border: '1px solid #e0e0e0',
        fontSize: '14px',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        borderRadius: '4px',
        overflow: 'hidden',
        tableLayout: 'auto',
        wordBreak: 'break-word',
      }}
    >
      {children}
    </table>
  </div>
);

export const Th: FC<TableProps> = ({
  children,
  style = {},
  column,
  ...props
}) => (
  <th
    style={{
      padding: '10px 14px',
      textAlign: 'left',
      backgroundColor: '#f5f5f5',
      borderBottom: '2px solid #ddd',
      fontWeight: '600',
      color: '#333',
      whiteSpace: 'pre-line',
      wordBreak: 'break-word',
      minWidth:
        column === 'feature' || children === 'Feature' ? 120 : undefined,
      ...style,
    }}
    {...props}
  >
    {children}
  </th>
);

export const Td: FC<TableProps> = ({
  children,
  style = {},
  column,
  ...props
}) => (
  <td
    style={{
      padding: '10px 14px',
      borderBottom: '1px solid #eee',
      lineHeight: '1.6',
      verticalAlign: 'top',
      color: '#555',
      whiteSpace: 'pre-line',
      wordBreak: 'break-word',
      minWidth: column === 'feature' ? 120 : undefined,
      ...style,
    }}
    {...props}
  >
    {children}
  </td>
);
