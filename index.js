// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    'Your project Title (Required)',
    'What is the description of the project ? (Required)',
    'Table of Contents (Optional)',
    'What are steps required to install the project ?',
    'Usage',
    'Credits',
    'License',
    'Badges',
    'Features',
    'How to Contribute',
    'Tests'
]


const promptProject = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
            type: 'checkbox',
            name: 'tableOfContents',
            message: questions[2],
            choices: ['Installation', 'Usage', 'Credits', 'License', 'Badges', 'Features','How to Contribute', 'Test']
        }
    ])
}

promptProject()
    .then(data => {
        console.log(data)
    })











// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
