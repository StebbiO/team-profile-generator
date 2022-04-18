const Employee = require('./Employee');

class Manager extends Employee {
    // new constructor
    constructor(name, id, email, officeNumber) {
        // inherited from employee
        super(name, id, email);
        // new
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    // new method unique to manager
    getOfficeNumber () {
        return this.officeNumber;
    }
}

module.exports = Manager;