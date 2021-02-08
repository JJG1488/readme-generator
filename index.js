// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown');
const validator = require('validator')

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'checkbox',
        name: 'checkbox',
        message: 'What would you like on your README?',
        choices: ['title', 'email', 'github', 'description', 'link', 'photo', 'usage', 'license', 'issues', 'installation', 'tests', 'contributors']
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is the title?',
        when: (data) => (data.checkbox).includes('title')
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        when: (data) => (data.checkbox).includes('email')
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        when: (data) => !validator.isEmail(data.email)
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub name?',
        when: (data) => (data.checkbox).includes('github')
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is this app for? (Description)',
        when: (data) => (data.checkbox).includes('description')
    },
    {
        type: 'input',
        name: 'link',
        message: 'What is the live link to your application?',
        when: (data) => (data.checkbox).includes('link')
    },
    {
        type: 'input',
        name: 'photo',
        message: 'What is the name of the preview photo of your application?',
        when: (data) => (data.checkbox).includes('photo')

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?',
        when: (data) => (data.checkbox).includes('installation')
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app? (Usage)',
        when: (data) => (data.checkbox).includes('usage')
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license coverage?',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
        when: (data) => (data.checkbox).includes('license')
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'How do you make contributions to the app?',
        when: (data) => (data.checkbox).includes('contributors')
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
        when: (data) => (data.checkbox).includes('tests')

    },
    {
        type: 'input',
        name: 'issues',
        message: 'How do you report issues?',
        when: (data) => (data.checkbox).includes('issues')
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Your README has been generated');
    })

}

// TODO: Create a function to initialize app
function init() {
    // prompts questions....then...
    inquirer.prompt(questions).then((data) => {
        console.log(data)
        writeToFile('readme.md', generateMarkdown(data))
    }).catch((err) => {
        if (err) {
            console.log(err);
        }
        console.log('Your README has been generated');
    })
}

// Function call to initialize app
init();


