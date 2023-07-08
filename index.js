// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message: "What do you want the name of your Project Title to be?"
}, {
    type: "input",
    name: "description",
    message: "Please provide a short description of your project.",
}, {
    type: "input",
    name: "installation",
    message: "what are the installation instructions for your application?",
}, {
    type: "input",
    name: "usage",
    message: "How to you use your application?"
}, {
    type: "input",
    name: "contribution",
    message: "Please explain the guidelines for contributing to this project.",
}, {
    type: "input",
    name: "test",
    message: "How can people run the tests for your application?"
}, {
    type: "list",
    name: "license",
    message: "Which license would you like to use for this projcet?",
    choices: ["GNU General Public License 3.0", "MIT", "Apache License 2.0", "Mozilla Public License 2.0", "none"],
}, {
    type: "input",
    name: "GitHub",
    message: "What is your GitHub username?",
}, {
    type: "input",
    name: "Email",
    message: "What is your email?",
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err){
        if (err) {
            return console.log(err);
        }
        console.log("your README.md has been created!");
    });
}

// TODO: Create a function to initialize app
async function init() {
    const answers = inquirer.prompt(questions);

    let readmeAnswers = generateMarkdown(answers);

    writeToFile("README.md", readmeAnswers);
}

// Function call to initialize app
init();
