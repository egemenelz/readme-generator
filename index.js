// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    'Your project Title (Required)',
    'What is the description of the project ? (Required)'
]

console.log(questions)


const promptProject = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: ''
        }
    ])
}













// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
