const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
var github = require("octonode");
const sectionPrompts = require("./utils/prompts.js")
const generateMkdown = require("./utils/generateMarkdown.js");

const writeFile = util.promisify(fs.writeFile);

// prompt file write location
let start = async function() { 
  try { 
    const { username, password } = await inquirer.prompt([
        {
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
    } else {
      authenticated = false;
      console.log("Invalid credentials");
    }
  });
}

 

  async function init() 
  {
    try {
    await start();
    const answers = await sectionPrompts();
    const mkDown = await generateMkdown(answers);
    await writeFile ("README.md", mkDown);
    console.log("Success!");
    }
    
      
        
    catch (err) {
      console.log("There was an error writting your file." + err)
    }
  }
  
  init();