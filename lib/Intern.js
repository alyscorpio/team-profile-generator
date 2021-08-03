const inquirer = require("inquirer");

class Intern {

    constructor(name) {
        this.name = name;
    }

    start() {
        this.getInternName();
    }

    getName() {
        inquirer
            .prompt([
                {
                name: 'name',
                type: 'input',
                message: "What is the intern's name?",
                },
            ])
            .then ((name) => {
                this.getEmail();
                console.log(name);
            });
    }  
    
    getInternEmail() {
        inquirer
            .prompt([
                {
                name: 'email',
                type: 'input',
                message: "What is the student's email?",
                },
            ])
            .then ((email) => {
                this.getSchool();
                console.log(email);
            });
    }

    getSchool() {
        inquirer
            .prompt([
                {
                name: 'school',
                type: 'input',
                message: "What school does the intern attend?",
                },
            ])
            .then ((school) => {
                this.getId();
                console.log(school);
            });
    }

}

module.exports = Intern;