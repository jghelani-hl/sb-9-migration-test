// eslint-rules/no-barrel-imports.js
import path from 'path';
import fs from 'fs';

function resolvesToIndexFile(dirPath) {
  return (
    fs.existsSync(path.join(dirPath, 'index.ts')) ||
    fs.existsSync(path.join(dirPath, 'index.tsx')) ||
    fs.existsSync(path.join(dirPath, 'index.js')) ||
    fs.existsSync(path.join(dirPath, 'index.jsx'))
  );
}

export default {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow importing from barrel (index.ts/js) files via relative paths',
      recommended: false,
    },
    schema: [],
    messages: {
      noBarrel:
        'Avoid importing from barrel files (index.ts/js). Import directly from the component file.',
    },
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        const importPath = node.source.value;

        if (!importPath.startsWith('.')) return; // skip non-relative

        const currentFile = context.getFilename();
        const baseDir = path.dirname(currentFile);
        const resolvedPath = path.resolve(baseDir, importPath);

        // Case 1: explicitly importing index
        const explicitIndex = [
          'index.ts',
          'index.tsx',
          'index.js',
          'index.jsx',
        ];
        const isExplicitIndex = explicitIndex.some((name) =>
          resolvedPath.endsWith(name),
        );

        // Case 2: folder import that resolves to index file
        const isDirectory = !path.extname(resolvedPath);
        const isImplicitBarrel =
          isDirectory && resolvesToIndexFile(resolvedPath);

        if (isExplicitIndex || isImplicitBarrel) {
          context.report({
            node,
            messageId: 'noBarrel',
          });
        }
      },
    };
  },
};
