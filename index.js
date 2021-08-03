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
                message: "What is the team manager's name?"  
            },
            {
                type: "input",
                name: "id",
                message: "What is the team employee id?"  
            },
            {
                type: "input",
                name: "email",
                message: "What is the team manager's email?"  
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
            nextMember();
        });
}