const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
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