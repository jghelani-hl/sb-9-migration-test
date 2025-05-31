import 'react';
import type { StyleVariables } from '../styles/StyleContext/types';

// Extend this union with any additional custom variable patterns as needed
export type CustomCSSVariable =
  | `--hl-autoscale-${string}`
  | `--hl-autoscale-scale`;
// Add more custom variable patterns here as needed

declare module 'react' {
  interface CSSProperties {
    // Theme variables
    [K in StyleVariables]?: string | number;
    // Custom variables
    [K in CustomCSSVariable]?: string | number;
  }
}
