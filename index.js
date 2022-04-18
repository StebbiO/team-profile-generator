const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const path = require('path');
const { TestResult } = require('@jest/types');
const siteTemplate = require('./src/site-template');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const myTeam = [];

const queryManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name (Required)',
            validate: nameInput => {
                if (!nameInput) {
                    console.log('Please enter your name!');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your employee ID (Required)',
            validate: idInput => {
                if (!idInput) {
                    console.log('Please enter a valid ID number!');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your employee email address (Required)',
            validate: emailInput => {
                if (!emailInput) {
                    console.log('Please enter your employee email address!');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your office number (Required)',
            validate: officeNumber => {
                if (!officeNumber) {
                    console.log('Please enter your office number!');
                    return false;
                }
                return true;
            }
        },
    ])
    .then((answers) => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        myTeam.push(manager);
        querySelect();
    })
};

const querySelect = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select how you wish to proceed:',
            choices: ['Add an engineer', 'Add an intern', 'Team Complete']
        }
    ])
    .then(choice => {
        switch (choice.menu) {
            case 'Add an engineer':
                queryEngineer();
                break;
            case 'Add an intern':
                queryIntern();
                break;
            default:
                completeTeam();
        }
    });
};

const queryEngineer = () => {
    console.log(`
    ==================
    Add a New Engineer
    ==================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter engineer's name (Required)",
            validate: nameInput => {
                if (!nameInput) {
                    console.log("Please enter engineer's name!");
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your employee ID (Required)',
            validate: idInput => {
                if (!idInput) {
                    console.log('Please enter a valid ID number!');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your employee email address (Required)',
            validate: emailInput => {
                if (!emailInput) {
                    console.log('Please enter your employee email address!');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please enter your GitHub username (Required)',
            validate: gitHub => {
                if (!gitHub) {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
                return true;
            }
        }
    ])
    .then((answers) => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        myTeam.push(engineer);
        querySelect();
    })
};

const queryIntern = () => {
    console.log(`
    ==================
    Add a New Intern
    ==================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter intern's name (Required)",
            validate: nameInput => {
                if (!nameInput) {
                    console.log("Please enter engineer's name!");
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your employee ID (Required)',
            validate: idInput => {
                if (!idInput) {
                    console.log('Please enter a valid ID number!');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your employee email address (Required)',
            validate: emailInput => {
                if (!emailInput) {
                    console.log('Please enter your employee email address!');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter your affiliated school name (Required)',
            validate: school => {
                if (!school) {
                    console.log('Please enter your affiliated school name!');
                    return false;
                }
                return true;
            }
        }
    ])
    .then((answers) => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        myTeam.push(intern);
        querySelect();
    })
};

const completeTeam = () => {
    console.log(`
    ================
    Complete My Team
    ================
    `);

    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    } else {
        fs.writeFileSync(distPath, siteTemplate(myTeam), 'utf-8');
        console.log('Team roster created successfully!');
    }
};

queryManager();