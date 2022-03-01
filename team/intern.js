class Intern {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    internName() {
        return this.name;
    }
    InternID() {
        return this.id;
    }
    internEmail() {
        return this.email;
    }
    internRole() {
        return "Intern";
    }
    internGithub() {
        return this.github;
    }
}

module.exports = Intern;