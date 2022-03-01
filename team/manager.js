class Manager {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    managerName() {
        return this.name;
    }
    managerID() {
        return this.id;
    }
    managerEmail() {
        return this.email;
    }
    managerRole() {
        return "Manager";
    }
    managerGithub() {
        return this.github;
    }
}

module.exports = Manager;