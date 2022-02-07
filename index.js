const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const { writeFile } = require("./src/generatePage.js")
const generatePage = require("./src/htmlTemplate.js");

let team = [];

managerPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?"
        },
        {
            type: "input",
            name: "officeNum",
            message: "What is their office number?"
        }
    ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
            team.push(manager);
            return addEmployeePrompt();
        })
}

const addEmployeePrompt = () => {
    return inquirer.prompt(
        {
            type: "confirm",
            name: "finished",
            message: "Would you like to add another employee?",
            default: false
        }
    )
        .then((answers) => {
            if (answers.finished) {
                return typeEmployee();
            }
            else {
                return generatePage(team);
            }
        })
}

const typeEmployee = () => {
    return inquirer.prompt(
        {
            type: "list",
            name: "role",
            message: "What kind of employee would you like to add?",
            choices: [
                "Engineer",
                "Intern"
            ]
        })
        .then((answers) => {
            if (answers.role === "Engineer") {
                return engineerPrompt();
            }
            else if (answers.role === "Intern") {
                return internPrompt();
            }
        }
        )
}

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is their Github username?"
        }
    ])
        .then((answers) => {
            const engineer = (new Engineer(answers.name, answers.employeeId, answers.email, answers.github));
            team.push(engineer);
            return addEmployeePrompt();
        })
}

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What school do they go to?"
        }
    ])
            .then((answers) => {
                const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
                team.push(intern);
                return addEmployeePrompt();
            })


}

const init = async function () {
    const HTML = await managerPrompt();
    writeFile(HTML);
}

init();