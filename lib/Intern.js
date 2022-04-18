const Employee = require('./Employee');

class Intern extends Employee {
    // new constructor
    constructor(name, id, email, school) {
        // inherited from employee
        super(name, id, email);
        // new
        this.school = school;
        this.role = 'Intern';
    }

    // new method unique to intern
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;