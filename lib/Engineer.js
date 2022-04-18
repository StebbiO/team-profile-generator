const Employee = require('./Employee');

class Engineer extends Employee {
    // new constructor
    constructor(name, id, email, gitHub) {
        // inherited from employee
        super(name, id, email);
        // new
        this.gitHub = gitHub;
        this.role = 'Engineer';
    }

    // new method unique to engineer
    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer;