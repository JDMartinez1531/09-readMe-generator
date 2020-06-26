const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
var github = require("octonode");
const sectionPrompts = require("./prompts")
const generateMkdown = require("./generateMarkdown");
const repoData = {repoName: "", description: ""}

const writeFile = util.promisify(fs.writeFile);

// prompt file write location
let start = async function() 
{ 
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
else {
    sectionPrompts();
}
}
  catch (err) 
    {
      console.log(err);
    }
}

// get github authentication
function getAuthentication(client) {
  client.get("/user", {}, function (err, status, body, headers) {
    if (!err) {
      authenticated = true;
      console.log("authenticated");
        makeNewRepo()
    } else {
      authenticated = false;
      console.log("Invalid credentials");
    }
  });
}

function makeNewRepo() {
    inquirer
      .prompt([
        {
          name: "reponame",
          type: "input",
          message: "Repo name: ",
          default: "Enter Repo Name Here",
        },
        {
          name: "description",
          type: "input",
          message: "Description: ",
          default: "Enter Description Here",
        },
      ])
      .then((answers) => {
        repoData.reponame = answers.reponame;
        repoData.description = answers.description;
  
        sectionPrompts();
      });
  }

  async function init() 
  {
    

    try {
    await start();
    const answers = await sectionPrompts();
    const mkDown = await generateMkdown(answers);
    await writeFile ("README.md", mkDown)
      console.log("Success!")
        }
    catch (err) {
      console.log("There was an error writting your file." + err)
    }
  }

  init()