const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project! (Required)',
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project (Required)',
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please give a description of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give the installation instructions for your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instruction and examples for use. Include screenshots as needed.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use https://choosealicense.com/',
        choices: [
            'MIT',
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'Boost Software License 1.0',
            'The Unlicense',
        ],
        default: 0
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter a GitHub user name. (Required)',
        validate: (userNameInput) => {
            if (userNameInput) {
                return true;
            } else {
                console.log('Please enter your Github user name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }



];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('README.md created!');
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            return generateMarkdown(data);
        })
        .then((markdown) => {
            writeToFile('README.md', markdown);
        })
        .catch((err) =>{
            console.log(err);
        });
}

// function call to initialize program
init();
