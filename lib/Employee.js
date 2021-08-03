const inquirer = require("inquirer");

class Employee {

    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
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
                message: "What is the Employee's name?",
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

    getId() {
       this.id = Math.floor(Math.random() * 100);
       console.log(id);
    }
}

module.exports = Employee;