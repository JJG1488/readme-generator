// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown');
const validator = require('validator')

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'


    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        when: (data) => !validator.isEmail(data.email)

    }
    ,
    {
        type: 'input',
        name: 'description',
        message: 'What is this app for?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?'

    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license?',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'How do you make contributions to the app?'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'

    },
    {
        type: 'input',
        name: 'issues',
        message: 'How do you report issues?'
    },


];

// const email = [

//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email?'


//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email?',
//         when: (data) => !validator.isEmail(data.email)

//     }
    

// ]

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
    // prompts questions....
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


