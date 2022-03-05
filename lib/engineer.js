const Employee = require("./Employee");

// the contructor that extends the original Employee class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }

    // returns github from input 
    getGithub () {
        return this.github;
    }

     // sets role to engineer
    getRole () {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer; 