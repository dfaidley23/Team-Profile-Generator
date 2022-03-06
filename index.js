// adding const to contaitn the required modules and files as well as an empty array to store the returned data
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const generateHTML = require('./src/generateHTML');
const teamMembers = [];

// prompts to ask for the team managers information
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
        // pushing the manager to the array
        teamMembers.push(manager); 
    })
};

// inquirer prompts for employee data
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose what you employee's role is",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's is your employee's name?", 
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
            message: "Please enter your employee's github name.",
            // adding a when field to make the prompt only visible when the role is an Engineer
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            // added code to make the school question only visible to the Intern role
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'addEmployees',
            message: 'Do you have any more emebers on your team?',
            default: false
        }
    ])
    .then(employeeRes => {

        let { name, id, email, role, github, school, addEmployees } = employeeRes; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }
        // pushing the returned data the the teamMembers array
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