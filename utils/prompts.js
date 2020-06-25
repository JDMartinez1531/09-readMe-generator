const inquirer = require("inquirer");

const questions = [
    {
        name: "location",
        type: "list",
        message: "Where would you like to write your README.md",
        choices: [
          "Create new Github repository",
          "Local",
        ],
      },
]




function prompts() {
    return inquirer.prompt(questions)
}

module.exports = prompts;