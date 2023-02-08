const Employee = require("./Employee")

// Engineer class extends Employee class and add GitHub, get GitHub(), getRole()

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;

