#!/usr/bin/env node

import chalk from "chalk";
import open from "open";
import ora from "ora";

console.log(
  chalk.cyanBright(`
██╗  ██╗██╗██████╗  ██████╗ ███╗   ██╗
██║ ██╔╝██║██╔══██╗██╔═══██╗████╗  ██║
█████╔╝ ██║██████╔╝██║   ██║██╔██╗ ██║
██╔═██╗ ██║██╔══██╗██║   ██║██║╚██╗██║
██║  ██╗██║██║  ██║╚██████╔╝██║ ╚████║
╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
`),
);

const spinner = ora("Launching Kiron's Portfolio...").start();

(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  try {
    await open("https://kiron.dev");
    spinner.succeed(chalk.green("Portfolio opened in your browser! 🚀"));
    console.log(chalk.yellowBright("Thanks for checking out my portfolio! 🎉"));
  } catch (err) {
    spinner.fail(chalk.red("Failed to open the portfolio."));
    process.exit(1);
  }
})();
