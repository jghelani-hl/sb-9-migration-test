import React from 'react';

import { AvatarProps, AvatarShape, AvatarSize } from './types';
import './Avatar.scss';

const DEFAULT_SIZE: AvatarSize = 40;
const DEFAULT_SHAPE: AvatarShape = 'circle';

/**
 * Avatar component for displaying user images, icons, or initials.
 */
export const Avatar: React.FC<AvatarProps> = ({
  shape = DEFAULT_SHAPE,
  size = DEFAULT_SIZE,
  src,
  alt = '',
  children,
  className = '',
  style,
}) => {
  const shapeClass =
    shape === 'circle' ? 'hl-avatar--circle' : 'hl-avatar--square';
  const sizeClass = `hl-avatar--size-${size}`;
  const rootTestId = shape === 'circle' ? 'avatar-circle' : 'avatar-square';

  return (
    <span
      className={`hl-avatar ${shapeClass} ${sizeClass} ${className}`.trim()}
      style={style}
      data-shape={shape}
      data-size={size}
      data-testid={rootTestId}
    >
      {src ? (
        <img src={src} alt={alt} />
      ) : children ? (
        <span className="hl-avatar__initials">{children}</span>
      ) : null}
    </span>
  );
};
