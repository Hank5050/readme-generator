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
      message: 'What is your GitHub URL?',
      name: 'gitHub'
    },
    {
        type: 'input',
        message: 'How do you use your Project?',
        name: 'usage'  
    },
    {
        type: 'input',
        message: 'What is the License of your project?',
        name: 'license'
    },
  ])
  .then((answers) => {
      const mdContent = makeMd(answers);
    fs.writeFile('README.md', mdContent, (err) =>
    err ? console.log(err) : console.log('Success!'));
  });

  const makeMd = ({projectTitle, projDesc, license, gitHub, usage}) =>
  `# ⭐ ${projectTitle}

  ## 📘 Description of Project:

  
  ${projDesc}
  
  
  
  ## 🛠 Installation:

  
  Make sure you have node installed on your PC, then simply go to [My GitHub Repo](${gitHub}) and clone the project to your personal computer. 
  
  
  ## ✏ Usage:

  
  ${usage}
  
  
  ## 📃 License
  
  
  ${license}
  
  
`;