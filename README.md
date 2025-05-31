# hl-ui-library

A modern UI component library built with React and TypeScript.

## Key Features

- Modern React components for building rich interfaces
- Strongly typed with TypeScript
- Customizable design system with CSS variables
- Comprehensive documentation and examples
- Modular architecture for tree-shaking optimization

## Component Architecture

Components follow a consistent directory structure and organization pattern:

```
src/components/[ComponentName]/
├── [ComponentName].tsx         # Main component implementation
├── [ComponentName].scss        # Component styles
├── [ComponentName].stories.tsx # Storybook stories
├── [ComponentName].mdx         # Component documentation
├── types.ts                    # Component types
└── features/                   # Feature modules (for complex components)
    └── [FeatureName]/          # Each feature in its own directory
        ├── [FeatureName].tsx   # Feature component
        ├── [FeatureName].scss  # Feature styles
        ├── types.ts            # Feature-specific types
        └── use[FeatureName].ts # Feature hook
```

## Consuming the Library

To use the library in your application, ensure the `hl-ui-library` class is added to the root of your application. Then, wrap your app with the `StyleContextProvider` and pass in an optional configuration object.

Example Usage:

```tsx
import { StyleContextProvider } from 'hl-ui-library/styles/StyleContext'; // Assuming StyleContextProvider is exported from here
// import { MyUiComponent } from './components/MyUiComponent/MyUiComponent'; // Example component import

const App = () => {
  const customConfig = {
    colors: {
      primary: '#123456',
      secondary: '#abcdef',
    },
    // ... other custom style configurations
  };

  return (
    <div className="hl-ui-library">
      <StyleContextProvider styleConfig={customConfig}>
        {/* <MyUiComponent className="my-custom-component" /> */}
        {/* Your application components */}
      </StyleContextProvider>
    </div>
  );
};

export default App;
```

## Styling

The library utilizes CSS variables for flexible and dynamic styling. These variables are generated based on the configuration provided to the `StyleContextProvider`.

### StyleContextProvider

The `StyleContextProvider` component is responsible for injecting CSS variables into the document head. It accepts a `styleConfig` prop, which is an object defining various style properties (e.g., colors, font sizes, spacing). If no `styleConfig` is provided, it uses the `initialStyleContext` defaults.

Example configuration object:

```typescript
const CSSVariables = {
  colors: {
    primary: '#000',
    secondary: '#fff',
  },
  'font-size': {
    small: '10px',
    medium: '14px',
    large: '18px',
  },
  // ... other properties
};
```

This configuration will generate CSS variables prefixed with `--hl-`. For example:

```css
.hl-ui-library {
  --hl-colors-primary: #000;
  --hl-colors-secondary: #fff;
  --hl-font-size-small: 10px;
  /* ... and so on */
}
```

### Applying Styles

Components within the library are styled using these CSS variables. You can also use these variables in your application's custom stylesheets to maintain consistency or override default styles.

```scss
.my-custom-component {
  background-color: var(--hl-colors-primary);
  font-size: var(--hl-font-size-medium);
}
```

Components are designed to accept a `className` prop, allowing for easy application of custom styles.

### Custom Stylesheet

You can create a custom stylesheet in your application to override or extend the library's styles using the globally available CSS variables.

## Getting Started

```bash
# Install dependencies
yarn

# Start Storybook development server
yarn storybook

# Build the library
yarn build
```

## Documentation

Comprehensive documentation is available in Storybook. Start the Storybook server to view component examples, API references, and usage guidelines.

## License

[MIT](LICENSE)
