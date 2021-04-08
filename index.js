const fs = require("fs");
const inquirer = require("inquirer");
const markdownGen = require('./markdownGen');

function init() {

    inquirer
    .prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your projects name?',
    },
    {
      type: 'input',
      name: 'describe',
      message: 'Write a short description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should  be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to have installed to utilize this repo?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to test?.',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'What does the user need to know about contributing to the repo?',
    },
    ])
      
      .then((answers) => {

        const markdownString = ` # Inquirer_README-Generator
        ## Table of Contents
        
        1. [Description](#Description)
        2. [Installation](#Installation)
        3. [Usage](#Usage)
        4. [Contributing](#Contributing)
        5. [Tests](#Tests)
        6. [Questions](#Questions)
        7. [License](#License)
        8. [Questions](#Questions)
        
        
        
        ## Description  
        
        Project Name: 
        
        This project is: ${answers.projectName}
        
        ${answers.describe}
        
        My GitHub User Name is: ${answers.github}
        
     
        ## Installation
        
        To install dependencies use the ${answers.installation}
        
       
        ## Usage
        
        To utilize this project you will need ${answers.usage} installed
        
       
        ## Contributing
        
        ${answers.contribute}
        
        Pull requests are welcome. 
        For larger changes, please contact me either though Github or my email to discuss what you would like to change.
        

        ## Tests

        To test any changes you make run: ${answers.tests}


        ## License
        
        [MIT](https://choosealicense.com/licenses/mit/)
        
      
        ## Questions

        If you have any questions please contact me at:
        ${answers.email} `;

            writeToFile ("README.md", markdownString);
            
    })
    };
    
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        if(err) console.log(err)
      })
};

init();