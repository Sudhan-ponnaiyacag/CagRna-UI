module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:@next/next/recommended', // Next.js recommended rules
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Add your custom rules here
    },
  };
  