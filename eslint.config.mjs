import js from '@eslint/js';
import pluginAstro from 'eslint-plugin-astro';
import pluginUnocss from '@unocss/eslint-config/flat';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  {
    ignores: ['node_modules/**', 'eslint.config.js'],
  },
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  ...pluginAstro.configs.recommended,
  ...pluginAstro.configs['jsx-a11y-recommended'],
  pluginUnocss,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
);
