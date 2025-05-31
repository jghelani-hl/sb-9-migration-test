import { ReactNode, CSSProperties } from 'react';

/**
 * Avatar component props
 */
export type AvatarShape = 'circle' | 'square';
export type AvatarSize = 24 | 40 | 60;

export interface AvatarProps {
  /**
   * The shape of the avatar: circle or square
   * @default 'circle'
   */
  shape?: AvatarShape;
  /**
   * The size of the avatar in px (24, 40, 60)
   * @default 40
   */
  size?: AvatarSize;
  /**
   * Image source URL
   */
  src?: string;
  /**
   * Alt text for the image
   */
  alt?: string;
  /**
   * Children (e.g., initials or custom content)
   */
  children?: ReactNode;
  /**
   * Additional className for the avatar
   */
  className?: string;
  /**
   * Inline style for the avatar
   */
  style?: CSSProperties;
}
