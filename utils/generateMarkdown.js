// function to generate markdown for README
function generateMarkdown(data) {
      const {
        title,
        description,
        installation,
        usage,
        contribution,
        tests,
        license,
        github,
        email
      } = data;

    return `
  # ${title}

  ![${license} license badge](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-green)
  <!--
  add screenshot to directory if desired
  ![Project Name](./assets/images/screenshot.png)
  -->

  ## Description

  ${description}

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contribution](#contribution)
    * [Testing](#testing)
    * [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  This project is covered under the ${license} license

  ## Contribution
  ${contribution}

  ## Testing
  ${tests}

  ## Questions
  Link to my GitHub
  [${github}](https://github.com/${github})

  If you have any questions or would like to contact me, please email me at
  [${email}](mailto:${email})
`;
}

module.exports = generateMarkdown;
