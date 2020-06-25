const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
var github = require("octonode");
const userPrompts = require("./prompts")
const generateMkdown = require("./generateMarkdown");
const prompts = require("./prompts");

// prompt file write location
let init = async function() { 
      try {
    const { location } = await inquirer.prompt([
{
    name: "location",
    type: "list",
    message: "Where would you like to write your README.md",
    choices: ["Create new Github repository", "Local"],
 }
]);
if (location === "Create new Github repository") {
const { username, password } = await inquirer.prompt([{
    name: "username",
    message: "Github Username: ",
    type: "input",
  },
  {
    name: "password",
    message: "Github Password: ",
    type: "password",
  }])
     var client = github.client({
        username: username,
        password: password,
      });
getAuthentication(client)
}
}
catch (err) {
    console.log(err);
  }
}

// get github authentication
function getAuthentication(client) {
  client.get("/user", {}, function (err, status, body, headers) {
    if (!err) {
      authenticated = true;
      console.log("authenticated");
    //   newRepoPrompts();
    } else {
      authenticated = false;
      console.log("Invalid credentials");
    }
  });
}
init();