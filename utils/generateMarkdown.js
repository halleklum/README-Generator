// This function returns a license badge for each option
function renderLicenseBadge(license) {
    let licenseString = " "
    if (license === "GNU General Public License 3.0") {
      licenseString = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    };
    if (license === "MIT") {
      licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    };
    if (license === "Apache License 2.0") {
      licenseString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
     };
    if (license === "Mozilla Public License 2.0") {
      licenseString = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    return licenseString
  }
  
  
  // This function returns the license link
  function renderLicenseLink(license) {
    if (!license) {
      return "";
  }
  
  switch (license) {
    case "GNU General Puplic License v3.0":
        return "https://www.gnu.org/licenses/gpl-3.0";
    case "MIT License":
        return "https://opensource.org/licenses/MIT";
    case "Apache License 2.0":
        return "https://opensource.org/licenses/Apache-2.0";
    case "Mozilla Public License 2.0":
        return "https://www.mozilla.org/en-US/MPL/2.0/";
    default:
        return "";
  }
  }
  
  
  // This function returns license section of README
    function renderLicenseSection(license) {
      if (!license) {
          return "";
      }
    
      return `## License:
      
      This project is licensed under ${license}.
      
      ${renderLicenseBadge(license)};
      ${renderLicenseLink(license)}`
    }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
console.log(data)
    return `# ${data.title}
  
## Table of Contents:
1. [Description](#description) 
2. [Installation](#Installation)
3. [Usage](#Usage)  
4. [Contribution](#Contribution)
5. [Test](#Test)
6. [License](#License)
7. [GitHub](#GitHub)
8. [E-mail](#E-mail)

## Description
${data.description} 
  
## Installation:
${data.installation}
  
## Usage:
${data.usage}
  
## Contribution Guidelines:
${data.contribution}
  
## Test:
${data.test}
  
## License
${renderLicenseSection(data.license)}
  
## GitHub
${data.github}
    
## E-mail
${data.email}`
}
  module.exports = generateMarkdown;
  