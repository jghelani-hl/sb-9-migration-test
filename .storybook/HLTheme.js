import { create } from 'storybook/theming';

export const HLThemeLight = create({
  base: 'light',
  brandTitle: 'SB 9 Migration',

  // Colors from design tokens
  colorPrimary: '#F58026', // orangeHighlight
  colorSecondary: '#307ABC', // blueMedium

  appBg: '#fff', // white
  appContentBg: '#fff', // white
  appPreviewBg: '#fff', // white
  appBorderColor: '#C3C4C7', // grayLight
  appBorderRadius: 4, // border-radius.small

  textColor: '#444855', // grayDarkest
  textInverseColor: '#fff', // white

  barTextColor: '#999BA2', // grayMedium
  barSelectedColor: '#F58026', // orangeHighlight
  barHoverColor: '#307ABC', // blueMedium
  barBg: '#fff', // white

  inputBg: '#fff', // white
  inputBorder: '#444855', // grayDarkest
  inputTextColor: '#444855', // grayDarkest
  inputBorderRadius: 4, // border-radius.small

  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
});

export const HLThemeDark = create({
  base: 'dark',
  brandTitle: 'SB 9 Migration',

  // Colors from design tokens
  colorPrimary: '#F58026', // orangeHighlight
  colorSecondary: '#5CA2EC', // blueBright (lighter for dark bg)

  appBg: '#23242A', // dark background
  appContentBg: '#23242A',
  appPreviewBg: '#23242A',
  appBorderColor: '#444855', // grayDarkest
  appBorderRadius: 4,

  textColor: '#fff',
  textInverseColor: '#23242A',

  barTextColor: '#C3C4C7', // grayLight
  barSelectedColor: '#F58026', // orangeHighlight
  barHoverColor: '#5CA2EC', // blueBright
  barBg: '#23242A',

  inputBg: '#444855', // grayDarkest
  inputBorder: '#C3C4C7', // grayLight
  inputTextColor: '#fff',
  inputBorderRadius: 4,

  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
});

export default HLThemeLight;
