/**
 * @filename: lint-staged.config.mjs
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*.{js,jsx,ts,tsx}': (stagedFiles) => [`prettier --write ${stagedFiles.join(' ')}`],
};

export default config;
