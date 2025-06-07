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
    button: string;
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
    grayDarkest: string; // #444855 $darkest-gray
    grayDark: string; // #6F727C $dark-gray
    grayMedium: string; // #999BA2 $med-gray
    grayMediumHover: string;
    grayMediumActive: string;
    grayLight: string; // #C3C4C7 $lt-gray
    grayLightHover: string;
    grayLightActive: string;
    grayLightest: string; // #DEDEDF $ltest-gray
    graySuperLight: string; // #EFEFEF $super-lt-gray

    blueMedium: string; // #307ABC $med-blue
    blueMediumHover: string; // hover state
    blueMediumActive: string; // active state
    blueBright: string; // #5CA2EC $bright-blue
    blueLight: string; // #A5C8ED $lt-blue
    blueLightest: string; // #D6E8FA $ltest-blue

    orangeHighlight: string; // #F58026 $hl-orange
    orangeHighlightHover: string;
    orangeHighlightActive: string;
    orangeLight: string; // #FEB97C $lt-orange
    orangeLightest: string; // #FCE1C8 $ltest-orange
    orangeRed: string; // #F44123 $red-orange

    coral: string; // #F36750 $coral
    coralHover: string;
    coralActive: string;
    coralLight: string; // #F99888 $lt-coral
    coralLightest: string; // #FCCFC8 $ltest-coral

    greenMedium: string; // #67CC9D $med-green
    greenMediumHover: string; // hover state
    greenMediumActive: string; // active state
    greenLight: string; // #B3E5CE $lt-green
    greenLightest: string; // #ECF8F3 $ltest-green

    red: string; // #dc3545 (added for danger)
    redHover: string;
    redActive: string;

    yellow: string; // #ffc107 (added for warning)
    yellowHover: string;
    yellowActive: string;

    white: string; // #fff
  };
  shadows: {
    default: string; // 0 1px 4px rgba(0, 0, 0, 0.08)
    hover: string; // 0 4px 16px 0 #0001
    medium: string; // 0 2px 8px rgba(0, 0, 0, 0.2)
    side: string; // 2px 0 10px rgba(0, 0, 0, 0.1)
    dropdown: string; // 0 4px 16px rgba(68, 72, 85, 0.12)
    focusSuccess: string; // 0 0 0 2px var(--hl-colors-success, #3ecf8e)
    none: string; // none
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
