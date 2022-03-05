const Employee = require('../lib/employee');

describe('Employee', () => {
    it('creates an employee object', () => {
        const employee = new Employee('David', 9, 'david.faidley23@gmail.com');

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });

    // gets name from getName() 
    it('gets employee name', () => {
        const employee = new Employee('David', 9, 'david.faidley23@gmail.com');

        expect(employee.getName()).toEqual(expect.any(String));
    });

    // gets id from getId() 
    it('gets employee ID', () => {
        const employee = new Employee('David', 9, 'david.faidley23@gmail.com');

        expect(employee.getId()).toEqual(expect.any(Number));
    });

    // gets emails from getEmail()
    it('gets employee email', () => {
        const employee = new Employee('David', 9, 'david.faidley23@gmail.com');

        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    });

    // gets role from getRole()
    it('gets role of employee', () => {
        const employee = new Employee('David', 9, 'david.faidley23@gmail.com');

        expect(employee.getRole()).toEqual("Employee");
    });
});