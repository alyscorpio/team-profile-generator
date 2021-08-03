// require inquirer
const inquirer = require("inquirer");
// require fs to write files
const fs = require("fs");

// import classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// array for new team members
const teamMembers = [];

// inquirer questions for manager
const addManager = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?"  
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's employee id?"  
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?"  
            },
            {
                type: "input",
                name: "office",
                message: "What is the manager's office number?"
            }
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            teamMembers.push(manager);
        });
}

const addEngineer = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?"  
            },
            {
                type: "input",
                name: "id",
                message: "What is the engieer's employee id?"  
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email?"  
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's GitHub username?"
            }
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamMembers.push(engineer);
        });
}

const addIntern = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?"  
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's employee id?"  
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?"  
            },
            {
                type: "input",
                name: "school",
                message: "What is the intern's school?"
            }
        ])
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamMembers.push(intern);
        });
}

