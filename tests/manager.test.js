// using Manager constructor 
const Manager = require('../lib/manager');

describe('Manager', () => {
    it('creates an Manager object', () => {
        const manager = new Manager('David', 9, 'david.faidley23@gmail.com', 1);
        
        expect(manager.officeNumber).toEqual(expect.any(Number));
    });

    // gets role from getRole()
    it('gets role of employee', () => {
        const manager = new Manager('David', 9, 'david.faidley23@gmail.com');

        expect(manager.getRole()).toEqual("Manager");
    });
});