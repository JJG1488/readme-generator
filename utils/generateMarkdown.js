// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  if ('The MIT License') {
    return 'Mit license Badge'
  } else if ('The GPL License') {
    return 'GPL'
  } else if ('Apache License') {
    return 'Apache Badge'
  } else if ('GNU License') {
    return 'GNU Badge'
  } else {
    return ""
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// ['The MIT License', 'The GPL License', 'Apache License', 'GNU license', 'N/A']
function renderLicenseLink(license) {
  console.log(license)
  if (license == 'The MIT License') {
    console.log(license);
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license == 'The GPL License') {
    console.log(license);
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license == 'Apache License') {
    console.log(license);
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
  } else if (license == 'GNU License') {
    console.log(license);
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    console.log(license);
    return " "
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license)
  if ('The MIT License') {
    return 'Mit license'
  } else if ('The GPL License') {
    return 'GPL'
  } else if ('Apache License') {
    return 'Apache'
  } else if ('GNU License') {
    return 'GNU'
  } else {
    return " "
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `## ${data.title}

# Description

${data.description}

---

# Preview

![Preview](./${data.photo})

![Link] (https://${data.link})

---

## Table of Contents

[Description of Application](#description)

[How to Install](#installation)

[How to Use](#usage)

[License Coverage](#license)

[How to Contribute](#contributing)

[How to Run Tests](#tests)

[Contact Information](#questions)
    
---

# Installation

${data.installation}

---

 # Usage

${data.usage}

---

# License

${renderLicenseLink(data.license)}

---

# Contributing

${data.contributors}

---

# Tests

${data.tests}

---

# Questions

${data.email}

${data.github}

${data.issues}

`;

}

module.exports = generateMarkdown;
