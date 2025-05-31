import { FC } from 'react';

type StatusType = 'complete' | 'partial' | 'missing' | 'implemented';

interface StatusCount {
  complete?: number;
  partial?: number;
  missing?: number;
  implemented?: number;
}

interface WeightConfig {
  complete?: number;
  partial?: number;
  implemented?: number;
}

interface ProgressBarProps {
  completed?: number;
  total?: number;
  statusCounts?: StatusCount;
  weights?: WeightConfig;
  title?: string;
  showFeatureCount?: boolean;
  showPercentage?: boolean;
}

const DEFAULT_WEIGHTS: WeightConfig = {
  complete: 1.0,
  partial: 0.5,
  implemented: 0.5,
};

export const ProgressBar: FC<ProgressBarProps> = ({
  completed,
  total,
  statusCounts,
  weights = DEFAULT_WEIGHTS,
  title = 'Progress',
  showFeatureCount = true,
  showPercentage = true,
}) => {
  let calculatedCompleted = completed;
  let calculatedTotal = total;

  if (statusCounts) {
    const {
      complete = 0,
      partial = 0,
      missing = 0,
      implemented = 0,
    } = statusCounts;
    const {
      complete: completeWeight = 1,
      partial: partialWeight = 0.5,
      implemented: implementedWeight = 0.5,
    } = weights;

    calculatedCompleted =
      complete * completeWeight +
      partial * partialWeight +
      implemented * implementedWeight;

    calculatedTotal = complete + partial + missing + implemented;
  }

  calculatedCompleted = calculatedCompleted || 0;
  calculatedTotal = calculatedTotal || 1;

  const percentage = Math.round((calculatedCompleted / calculatedTotal) * 100);

  return (
    <div
      style={{
        marginBottom: '24px',
        padding: '16px 20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontWeight: 500 }}>{title}</span>
        {showPercentage && (
          <span style={{ fontWeight: 600 }}>{percentage}% Complete</span>
        )}
      </div>
      <div
        style={{
          height: '12px',
          backgroundColor: '#e0e0e0',
          borderRadius: '6px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${percentage}%`,
            backgroundColor:
              percentage > 70
                ? '#4CAF50' // Green
                : percentage > 30
                  ? '#FFC107' // Amber
                  : '#2196F3', // Blue
            transition: 'width 0.5s ease-in-out',
            borderRadius: '6px',
          }}
        />
      </div>
      {showFeatureCount && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '8px',
            fontSize: '13px',
            color: '#666',
          }}
        >
          {statusCounts ? (
            <>
              <span>
                {statusCounts.complete || 0} complete,{' '}
                {statusCounts.partial || 0} partial
              </span>
              <span>{statusCounts.missing || 0} remaining</span>
            </>
          ) : (
            <>
              <span>{calculatedCompleted} features tracked</span>
              <span>{calculatedTotal - calculatedCompleted} remaining</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};
