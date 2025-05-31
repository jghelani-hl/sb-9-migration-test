# Styles Directory

This directory contains styles and style-related utilities for the HL UI Library.

## CSS Variables

The HL UI Library uses CSS variables for theming and styling components. These variables are dynamically injected at runtime through the `StyleContext.tsx` and `useCssVariablesInjection.ts` utilities.

### IDE Support for CSS Variables

WebStorm and other IDEs may report that CSS variables used in component styles (like `var(--hl-colors-primary)`) cannot be found during static analysis, since these variables are injected at runtime.

To solve this issue, we've created a `_variables.scss` file that:

1. Defines SCSS variables that mirror the CSS variables defined in `initialStyleContext.ts`
2. Maps these SCSS variables to CSS variables in a `:root` selector

This file is **for IDE support only** and is not used at runtime. Component SCSS files should import this file to help the IDE recognize the CSS variables:

```scss
@import '../../styles/variables';

.component {
  color: var(--hl-colors-primary);
  // Now WebStorm recognizes this variable
}
```

### Updating Variables

When adding new variables to `initialStyleContext.ts`, make sure to also add them to `_variables.scss` to maintain IDE support.

## File Structure

- `_variables.scss`: SCSS variables for IDE support
- `global.scss`: Global styles
- `StyleContext/`: Context for managing theme variables
  - `StyleContext.tsx`: React context provider
  - `initialStyleContext.ts`: Default theme values
  - `types.ts`: TypeScript types for the style context
- `utils/`: Style-related utilities
  - `useCssVariablesInjection.ts`: Hook for injecting CSS variables
  - `returnVariable.ts`: Utility for returning CSS variable values
