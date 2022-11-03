module.exports = {
  '**/*.(js|ts)?(x)': ['eslint --fix', 'git add'],
  '**/*.(scss|css)': [
    'stylelint --fix --custom-syntax postcss-scss',
    'git add',
  ],
  '**/*.{js,jsx,ts,tsx,css,scss,html,md}': ['prettier --write'],
}
