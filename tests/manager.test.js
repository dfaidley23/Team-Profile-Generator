// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('David', 9, 'david.faidley23@gmail.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('David', 9, 'david.faidley23@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 