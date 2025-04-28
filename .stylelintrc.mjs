/** @type {import("stylelint").Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier-scss',
  ],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/node_modules/**'],
};
