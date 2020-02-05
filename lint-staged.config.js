module.exports = {
  '*.{js,ts,tsx,vue}': ['vue-cli-service lint', 'git add'],
  '*.{js,ts,tsx,vue,css,scss,less,md}': ['prettier --write'],
};
