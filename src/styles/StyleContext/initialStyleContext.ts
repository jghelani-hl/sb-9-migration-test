import { StyleContextType } from './types';

export const initialStyleContext: StyleContextType = {
  'font-size': {
    small: '12px',
    medium: '16px',
    large: '20px',
  },
  'line-height': {
    small: 1.2,
    medium: 1.5,
    large: 1.8,
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xLarge: '32px', // Optional for larger spacing
  },
  'border-radius': {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
  'font-weight': {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  'letter-spacing': {
    small: 0.5,
    medium: 1,
    large: 1.5,
  },
  colors: {
    primary: '#307ABC', // $med-blue — modern, strong brand blue
    secondary: '#6F727C', // $dark-gray — clean neutral for support
    tertiary: '#5CA2EC', // $bright-blue — for accents and emphasis
    success: '#67CC9D', // $med-green — pleasant, trustworthy green
    warning: '#F58026', // $hl-orange — clear, high-vis alert
    danger: '#F44123', // $red-orange — bold destructive action
    white: '#FFFFFF', // good ol’ white
    black: '#444855', // $darkest-gray — slightly softened black
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
  },
};
