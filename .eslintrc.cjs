{
  files: ["**/*.{js,jsx,ts,tsx}"],
  plugins: ["react", "jsx-a11y"],
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
    formComponents: ["Form"],
    linkComponents: [
      { name: "Link", linkAttribute: "to" },
      { name: "NavLink", linkAttribute: "to" },
    ],
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    'react/prop-types': 'off',
  },
}
