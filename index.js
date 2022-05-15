// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// Questions includes the questions to ask user for the read me
const questions = [
    'Your project Title (Required)',
    'What is the description of the project ? (Required)',
    'Table of Contents ',
    'What are steps required to install the project ? (Required)',
    'Can you provide instructions for use ? (Required)',
    'Who did work with you in this project ?',
    'Choose a License (Required)',
    'Do you want to add custom badges ?',
    'Features (Required)',
    'How to Contribute',
    'How to test the application ?',
    'What is your name',
    'What is your GitHub account',
    'What is your email'
]


const promptProject = () => {
    return inquirer.prompt([
        {            
            type: 'input',
            name: 'name',
            message: questions[11],
            validate: questionInput => {
                if (questionInput) { return true; } else { console.log('Please enter your Name!'); return false; }
            }
        },
        {            
            type: 'input',
            name: 'githubAccount',
            message: questions[12],
            validate: questionInput => {
                if (questionInput) { return true; } else { console.log('Please enter your Github Account!'); return false; }
            }
        },
        {            
            type: 'input',
            name: 'email',
            message: questions[13],
            validate: questionInput => {
                if (questionInput) { return true; } else { console.log('Please enter your email!'); return false; }
            }
        },
        {            
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: questionInput => {
                if (questionInput) { return true; } else { console.log('Please enter your project title!'); return false; }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
            validate: questionInput => {
                if (questionInput) { return true; } else { console.log('Please enter description for your project!'); return false; }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[3],
            validate: questionInput => {
                if (questionInput) { return true; } else { console.log('Please enter installation of the project!'); return false; }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[4],
            validate: questionInput => {
                if (questionInput) { return true; } else { console.log('Please enter usage of the project!'); return false; }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: questions[5],
        },
        {
            type: 'list',
            name: 'license',
            message: questions[6],
            choices: ['GNU, General Public License v3.0', 'MIT License', 'ISC License']
        },
        {
            type: 'confirm',
            name: 'badges',
            message: questions[7],
            default: false
        },
        {
            type: 'input',
            name: 'features',
            message: questions[8],
            validate: questionInput => {
                if (questionInput) { return true; } else { console.log('Please enter features of the project!'); return false; }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: questions[9]
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[10]
        },
        {
            type: 'checkbox',
            name: 'tableOfContents',
            message: questions[2],
            choices: ['Installation', 'Usage', 'Credits', 'License', 'Badges', 'Features', 'Test']
        },
    ])
}

// Function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README.md file created!'
            });
        });
    });
}


// Function to initialize app
function init() {
    promptProject()
        .then(data => {
            return generateMarkdown(data);
        })
        .then(pageREADME => {
            return writeToFile(pageREADME);
        })
}


init();
