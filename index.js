const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your Project?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'Give a description of your Project:',
      name: 'projDesc',
    },
    {
      type: 'input',
      message: 'What is your GitHub UserName?',
      name: 'gitUser'
    },
    {
      type: 'input',
      message: 'What is your GitHub Repo URL?',
      name: 'gitHub'
    },
    {
        type: 'input',
        message: 'How do you use your Project?',
        name: 'usage'  
    },
    {
      type: 'input',
      message: 'What is your Email address?',
      name: 'email',
    },
    {
        type: 'list',
        message: 'What is the License of your project?',
        name: 'license',
        choices: ['ISC', 'BSD-3-Clause', 'MIT', 'UNLICENSED'],
    },
    {
      type: 'input',
      message: 'Is there any Contributers?',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'Is there any Tests you would like to include?',
      name: 'tests',
    },
  ])
  .then((answers) => {
      const mdContent = makeMd(answers);
    fs.writeFile('/sample/README.md', mdContent, (err) =>
    err ? console.log(err) : console.log('Success!'));
  });

  const makeMd = ({projectTitle, projDesc, license, gitHub, usage, gitUser, email, contribute, tests}) =>
  `# ⭐ ${projectTitle}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

  ## 📘 Description of Project:

  
  ${projDesc}
  
  
  
  ## 🛠 Installation:

  
  Make sure you have node installed on your PC, then simply go to [My GitHub Repo](${gitHub}) and clone the project to your personal computer. 
  
  
  ## ✏ Usage:

  
  ${usage}
  
  ## 👀 See it in action:


  
  
  ## 📃 License:
  
  
  ${license}


  ## ➕ Contributing:

  ${contribute}

  ## ✔ Tests:

  ${tests}


  ## ❔ Questions

  My Github User name is: ${gitUser}. Here is a link to my personal [GitHub Profile](https://github.com/Hank5050)

  If you have any questions please feel free to email me at: ${email} 
  I will return all correspondence as soon as possible.
  
  
`;