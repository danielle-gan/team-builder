const inquirer = require("inquirer");
const fs = require("fs");
// const html = require("./src/htmlTemplate");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

let teamArray = [];
let finished = "";

responseBasic = inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email address?"
        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }])
    .then((answers) => {
        console.log(answers.role);
        if (answers.role == "Manager") {
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "officeNum",
                        message: "What's the manager's office number?"
                    }
                ])
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
            teamArray.push(manager);
        }


        else if (answers.role == "Engineer") {
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "github",
                        message: "What's the engineer's github username?"
                    }
                ])

            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamArray.push(engineer);
        }
        else if (answers.role == "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "What school is the intern from?"
                }
            ])
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamArray.push(intern);
        }
    })
    .then((answers) => {
        console.log(teamArray);
        // for (let i = 0; i < teamArray.length; i++) {
        //     teamString = teamString + html.generateCard(teamArray[i]);
        // }
    })



