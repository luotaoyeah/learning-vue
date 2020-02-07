module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'node scripts/commit-msg.js',
  },
};
