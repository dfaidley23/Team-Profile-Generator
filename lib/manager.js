const Employee = require('./Employee');

// manager constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

    // sets role to manager 
    getRole () {
        return "Manager";
    }
}

module.exports = Manager; 