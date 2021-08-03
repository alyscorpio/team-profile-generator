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
            nextMember();
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
            nextMember();
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

const nextMember = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                message: "Great! Now let's finish adding your team members. What type of employee do you want to add next?",
                choices: ["Engineer", "Intern", "I'm done adding team members"],
                name: "employee"
            }
        ])
        .then((answers) => {
            if (answers.employee === "Engineer") {
                addEngineer();
            } else if (answers.employee === "Intern") {
                addIntern();
            } else {
                const generateHTML = teamHTML(answers);
                fs.writeFile("new.html", generateHTML, (err) =>
                err ? console.log(err) : console.log("Awesome! Your new team profile has been created!")
                );
            }
        })
}


const teamHTML = (answers) =>

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main id="info-blocks">
        <div class="row">
            <div class="card">
                <div class="card-head">
                    <h3 class="name">${manager.getName()}</h3>
                    <h4 class="role">${manager.getRole()}</h4>
                </div>
                <div class="card-info">
                    <p class="id">ID: ${manager.getId()}</p>
                    <a class="email">Email:  ${manager.getEmail()}</a>
                    <p class="office">Office: ${manager.getOffice()}</p>
                </div>
            </div>
            <div class="card">
                <div class="card-head">
                    <h3 class="name">${engineer.getName()}</h3>
                    <h4 class="role">${engineer.getRole()}</h4>
                </div>
                <div class="card-info">
                    <p class="id">ID: ${engineer.getId()}</p>
                    <a class="email">Email:  ${engineer.getEmail()}</a>
                    <p class="office">Office: ${engineer.getOffice()}</p>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
`

addManager();