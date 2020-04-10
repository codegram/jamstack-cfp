module.exports = {
  plugins: ["gridsome", "prettier", "simple-import-sort"],
  extends: [
    "plugin:prettier/recommended",
    "prettier/vue",
    "plugin:gridsome/recommended",
  ],
  rules: {
    "simple-import-sort/sort": "error",
    "no-console": ["error", { allow: ["error"] }],
  },
};
