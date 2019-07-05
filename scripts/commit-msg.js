const chalk = require("chalk");
const messagePath = process.env.HUSKY_GIT_PARAMS;
const message = require("fs")
  .readFileSync(messagePath, "utf-8")
  .trim();

const commitRegExp = /^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50}/;

if (!commitRegExp.test(message)) {
  console.log("\n--------------------------------------------------");

  console.error(
    `  ${chalk.bgRed.white("ERROR")} ${chalk.red(`invalid commit message format.`)}\n\n` +
      chalk.red(`  valid examples:\n`) +
      `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${chalk.green(`fix(model): handle events on blur (close #28)`)}`
  );
  console.log("--------------------------------------------------\n");

  process.exit(1);
}
