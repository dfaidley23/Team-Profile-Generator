// using Engineer constructor 
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('creates an Engineer object', () => {
        const engineer = new Engineer('David', 9, 'david.faidley23@gmail.com', 'dfaidley23');
        
        expect(engineer.github) .toEqual(expect.any(String));
    });

    // gets github from getGithub()
    it('gets engineer github value', () => {
        const engineer = new Engineer('David', 9, 'david.faidley23@gmail.com', 'dfaidley23');

        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
    });

    // gets role from getRole() 
    it('gets role of employee', () => {
        const engineer = new Engineer('David', 9, 'david.faidley23@gmail.com', 'dfaidley23');

        expect(engineer.getRole()).toEqual("Engineer");
    });
});