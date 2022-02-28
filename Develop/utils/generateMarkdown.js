// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0 License') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  } else if (license === 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
  } else if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
  } else if (license === 'Boost Software License 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
  } else if (license === 'The Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
  } else if (license === 'no license') {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `# ${data.title}
  ***
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ***
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ***
  ## Installation
  ${data.installation}
  ***
  ## Usage
  ${data.usage}
  ***
  ## License
  ***
  ## Contributing
  ${data.contribution}
  ***
  ## Tests
  ${data.test}
  ***
  ## Questions
  If you have any questions, check out my GitHub here: [${data.username}](${data.link}) <br />
  Or feel free to [email me](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
