module.exports = {
  root: true,
  ignorePatterns: [
    "temp.js",
    ".DS_Store",
    "node_modules",
    "/build",
    "/package",
    "/public",
    ".env",
    ".env.*",
    "!.env.example",
    "pnpm-lock.yaml",
    "package-lock.json",
    "yarn.lock",
    "**/.*"
  ],
  extends: ["eslint:recommended", "prettier"],
  plugins: ["unused-imports", "import"],
  rules: {
    "no-unused-vars": "warn",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "unused-imports/no-unused-imports": "error"
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  }
};
