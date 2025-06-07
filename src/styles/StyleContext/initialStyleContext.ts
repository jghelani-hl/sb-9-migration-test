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
    button: '2px',
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
    grayDarkest: '#444855', // $darkest-gray
    grayDark: '#6F727C', // $dark-gray
    grayMedium: '#999BA2', // $med-gray
    grayMediumHover: '#7a7b80', // 15% darker
    grayMediumActive: '#5c5c5e', // 35% darker
    grayLight: '#C3C4C7', // $lt-gray
    grayLightHover: '#a3a4a7', // 15% darker
    grayLightActive: '#848588', // 35% darker
    grayLightest: '#DEDEDF', // $ltest-gray
    graySuperLight: '#EFEFEF', // $super-lt-gray

    blueMedium: '#307ABC', // $med-blue
    blueMediumHover: '#2566a9', // 15% darker
    blueMediumActive: '#194d7f', // 35% darker
    blueBright: '#5CA2EC', // $bright-blue
    blueLight: '#A5C8ED', // $lt-blue
    blueLightest: '#D6E8FA', // $ltest-blue

    orangeHighlight: '#F58026',
    orangeHighlightHover: '#c9651f', // 15% darker
    orangeHighlightActive: '#a14f19', // 30% darker
    orangeLight: '#FEB97C', // $lt-orange
    orangeLightest: '#FCE1C8', // $ltest-orange
    orangeRed: '#F44123', // $red-orange

    coral: '#F36750',
    coralHover: '#c9543f', // 15% darker
    coralActive: '#a13f2e', // 30% darker
    coralLight: '#F99888', // $lt-coral
    coralLightest: '#FCCFC8', // $ltest-coral

    greenMedium: '#67CC9D', // $med-green
    greenMediumHover: '#4fa87d', // 15% darker
    greenMediumActive: '#357a5a', // 35% darker
    greenLight: '#B3E5CE', // $lt-green
    greenLightest: '#ECF8F3', // $ltest-green

    red: '#dc3545', // for danger
    redHover: '#b52a37', // 15% darker
    redActive: '#8e1f29', // 35% darker

    yellow: '#ffc107', // for warning
    yellowHover: '#e0a800', // 15% darker
    yellowActive: '#b38600', // 35% darker

    white: '#fff',
  },
  shadows: {
    default: '0 1px 4px rgba(0, 0, 0, 0.08)',
    hover: '0 4px 16px 0 #0001',
    medium: '0 2px 8px rgba(0, 0, 0, 0.2)',
    side: '2px 0 10px rgba(0, 0, 0, 0.1)',
    dropdown: '0 4px 16px rgba(68, 72, 85, 0.12)',
    focusSuccess: '0 0 0 2px rgb(62, 207, 142)',
    none: 'none',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
  },
};
