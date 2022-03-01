class Engineer {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    engineerName() {
        return this.name;
    }
    engineerID() {
        return this.id;
    }
    engineerEmail() {
        return this.email;
    }
    engineerRole() {
        return "Engineer";
    }
    engineerGithub() {
        return this.github;
    }
}

module.exports = Engineer;