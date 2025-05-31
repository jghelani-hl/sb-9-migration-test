import { StyleVariables } from '../StyleContext/types';

/**
 * A utility function that returns a CSS variable string.
 * @param variable - The CSS variable name to return
 * @returns A string with the CSS variable wrapped in `var()`
 * @example
 * // Returns: var(--hl-color-primary)
 * returnVariable('--hl-color-primary');
 */

export const returnVariable = (variable: StyleVariables) => {
  return `var(${variable})`;
};
