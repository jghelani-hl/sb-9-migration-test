export interface StyleContextType {
  'font-size': {
    small: string;
    medium: string;
    large: string;
  };
  'line-height': {
    small: number;
    medium: number;
    large: number;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
    xLarge: string; // Required for larger spacing
  };
  'border-radius': {
    small: string;
    medium: string;
    large: string;
  };
  'font-weight': {
    light: number;
    regular: number;
    medium: number;
    bold: number;
  };
  'letter-spacing': {
    small: number;
    medium: number;
    large: number;
  };
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    success: string;
    warning: string;
    danger: string;
    white: string;
    black: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

type FlattenObject<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends object
    ? FlattenObject<T[K], `${Prefix}--hl-${string & K}`>
    : `${Prefix}-${string & K}`;
}[keyof T];

export type StyleVariables = FlattenObject<StyleContextType>;
