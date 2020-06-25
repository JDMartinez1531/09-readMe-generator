const inquirer = require("inquirer");

const questions = [
    {
		type: "input",
		name: "contact_email",
		message: "Enter contact email for project:",
    },
    {
		type: "input",
		name: "title",
		message: "project title:"
    },
    {
		type: "input",
		name: "description",
		message: "project description:"
    },
    {
        
        type: "input",
        name: "label",
        message: "Badge - Badge Label: ",
        default: "<LABEL>",
      },
      {
        
        type: "input",
        name: "message",
        message: "Badge - Badge Message: ",
        default: "<MESSAGE>",
      },
      {
        
        type: "input",
        name: "color",
        message: "Badge - Badge Color: ",
        default: "<COLOR>",
      },
      {
		type: "editor",
		name: "installation",
		message: "installation instructions:",
    },
    {
        type: "editor",
		name: "usage",
        message: "instructions for use:",

    },
    {
		type: "list",
		name: "license",
		message: "project license:",
		choices: [
			"MIT",
			"GNU LGPLv3",
			"mpl 2.0",
			"Apache License 2.0",
			"GNU AGPLv3",
			"GNU GPLv3",
			"Boost Software License",
			"Unlicense",
			"ISC",
        ]},
        {
            type: "editor",
            name: "contributing",
            message: "contributing instructions:",
           
        },
        {
            type: "editor",
            name: "tests",
            message: "project tests (enter valid markdown):",
        }    
]




function sectionPrompts() {
    return inquirer.prompt(questions)
}

module.exports = sectionPrompts;