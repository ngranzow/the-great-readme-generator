const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your title!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the project. (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter a description!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the steps required to install your project. (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the steps!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use your project. (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the instructions!')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: ['Apache 2.0 License', 'GNU GPL v3', 'MIT', 'ISC', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'The Unlicense', 'no license']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'If you would like other developers to contribute, please provide guidelines.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'If included, please provide instructions now how to run tests.'
    },
    {
        type: 'name',
        name: 'username',
        message: 'What is your GitHug username? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your username!')
                return false;
            }
        }
    },
    {
        type: 'name',
        name: 'link',
        message: 'What is the link to your GitHub profile? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the link to your profile!')
                return false;
            }
        }
    },
    {
        type: 'name',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your email!')
                return false;
            }
        }
    },
];

// A function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// A function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile('README.md', generateMarkdown({...answers}))
        console.log('Congratulations! You created a README file!');
    })
}

// Function call to initialize app
init();
