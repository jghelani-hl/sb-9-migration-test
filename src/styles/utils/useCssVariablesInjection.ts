import { useCallback, useEffect } from 'react';

import { StyleContextType } from '../StyleContext/types';

/**
 * A React hook that injects CSS variables into the document head based on a style configuration object.
 * The variables are scoped under the `.hl-ui-library` class and follow the naming pattern:
 * `--hl-{key}-{subKey}: {subValue}`
 *
 * @param styles - A StyleContextType object containing the style configuration
 * @example
 * // For a style config like:
 * {
 *   colors: {
 *     primary: '#000000',
 *     secondary: '#ffffff'
 *   },
 *   spacing: {
 *     small: '8px',
 *     medium: '16px'
 *   }
 * }
 * // Creates CSS variables:
 * // .hl-ui-library {
 * // --hl-colors-primary: #000000;
 * // --hl-colors-secondary: #ffffff;
 * // --hl-spacing-small: 8px;
 * // --hl-spacing-medium: 16px;
 * // }
 */

export const useCssVariablesInjection = (styles: StyleContextType) => {
  const createCssVariables = useCallback(() => {
    const cssVariables = Object.entries(styles).reduce((acc, [key, value]) => {
      // All values in StyleContextType are objects, so we can directly process them as such
      return (
        acc +
        Object.entries(value as Record<string, string | number>).reduce(
          (acc, [subKey, subValue]) => {
            const cssVariableName = `--hl-${key}-${subKey}`;
            return acc + `${cssVariableName}: ${subValue};`;
          },
          '',
        )
      );
    }, '');

    return `.hl-ui-library {${cssVariables}}`;
  }, [styles]);

  const injectCssVariables = useCallback(() => {
    const style = document.createElement('style');
    style.innerHTML = createCssVariables();
    document.head.appendChild(style);
  }, [createCssVariables]);

  useEffect(() => {
    injectCssVariables();
  }, [injectCssVariables]);
};
