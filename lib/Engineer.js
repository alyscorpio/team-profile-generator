const inquirer = require("inquirer");

class Engineer {

    constructor(name) {
        this.name = name;
    }

    start() {
        this.getName();
    }

    getName() {
        inquirer
            .prompt([
                {
                name: 'name',
                type: 'input',
                message: 'What is the name of the team member?',
                },
            ])
            .then ((name) => {
                this.getEmail();
                console.log(name);
            });
    }  
    
    getEmail() {
        inquirer
            .prompt([
                {
                name: 'email',
                type: 'input',
                message: 'What is the email of the team member?',
                },
            ])
            .then ((email) => {
                this.getId();
                console.log(email);
            });
    }

}

module.exports = Engineer;