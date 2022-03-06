const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const generateHTML = require('./src/generateHTML');
const teamMembers = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamMembers.push(manager); 
        // console.log(manager); 
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'addEmployees',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeRes => {

        let { name, id, email, role, github, school, addEmployees } = employeeRes; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            // console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            // console.log(employee);
        }

        teamMembers.push(employee); 

        if (addEmployees) {
            return addEmployee(teamMembers); 
        } else {
            return teamMembers;
        }
    })

};


// writing the data to the HTML page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // error catcher
        if (err) {console.log(err);
            return;
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamMembers => {
    return generateHTML(teamMembers);
  })
  .then(htmlData => {
    return writeFile(htmlData);
  })
  .catch(err => {
 console.log(err);
  });