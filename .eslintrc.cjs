module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:storybook/recommended',
    'plugin:mdx/recommended'
  ],
  settings: {
    'mdx/code-blocks': true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    'import/order': [
      1,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: 'config', group: 'internal', position: 'after' },
          { pattern: 'config/**/*', group: 'internal', position: 'after' },
          { pattern: 'common', group: 'internal', position: 'after' },
          { pattern: 'common/**/*', group: 'internal', position: 'after' },
          { pattern: 'assets', group: 'internal', position: 'after' },
          { pattern: 'assets/**/*', group: 'internal', position: 'after' },
          { pattern: 'locale', group: 'internal', position: 'after' },
          { pattern: 'locale/**/*', group: 'internal', position: 'after' },
          { pattern: 'api', group: 'internal', position: 'after' },
          { pattern: 'api/**/*', group: 'internal', position: 'after' },
          { pattern: 'services', group: 'internal', position: 'after' },
          { pattern: 'services/**/*', group: 'internal', position: 'after' },
          { pattern: 'stores', group: 'internal', position: 'after' },
          { pattern: 'stores/**/*', group: 'internal', position: 'after' },
          { pattern: 'hooks', group: 'internal', position: 'after' },
          { pattern: 'hooks/**/*', group: 'internal', position: 'after' },
          { pattern: 'pages', group: 'internal', position: 'after' },
          { pattern: 'pages/**/*', group: 'internal', position: 'after' },
          { pattern: 'layouts', group: 'internal', position: 'after' },
          { pattern: 'layouts/**/*', group: 'internal', position: 'after' },
          { pattern: 'components', group: 'internal', position: 'after' },
          { pattern: 'components/**/*', group: 'internal', position: 'after' },
          { pattern: 'App', group: 'internal', position: 'after' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
};
