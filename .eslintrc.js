require('@bigcommerce/eslint-config/patch');

module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: ['@bigcommerce/eslint-config'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
