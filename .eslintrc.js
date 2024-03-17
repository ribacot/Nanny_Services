module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: [
      "eslint:recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
  };