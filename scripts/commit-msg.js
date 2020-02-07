const message = require('fs').readFileSync(process.env.HUSKY_GIT_PARAMS, 'utf-8').trim();
const commitRegExp = /^(revert: )?(Merge|feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50}/;

if (!commitRegExp.test(message)) {
  console.error('\nERROR: INVALID COMMIT MESSAGE FORMAT.\n');
  process.exit(1);
}
