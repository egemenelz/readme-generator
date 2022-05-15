

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  switch (license) {
    case 'GNU, General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    case 'ISC License':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case 'GNU, General Public License v3.0':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT License':
      return '(https://opensource.org/licenses/MIT)';
    case 'ISC License':
      return '(https://opensource.org/licenses/ISC)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  }
  return `
  ## License
  ${renderLicenseBadge(license) +''+ renderLicenseLink(license)}`
}

/**
 * This methods entry is optional so,
 *  We will have data only when the user enters the data
 *  otherwise, it will return empty string
 * @param {*} creditsText 
 * @returns 
 */
function generateCredits(creditsText) {
  if (!creditsText) {
    return ''
  }
  return `
  ## Credits
  ${creditsText}
  `
}
/**
 * This methods entry is optional so,
 *  We will have data only when the user enters the data
 * otherwise, it will return empty string
 * @param {*} contributeText 
 * @returns 
 */
function generateContribute(contributeText) {
  if (!contributeText) {
    return ''
  }
  return `
  ## How to Contribute
  ${contributeText}
  `
}

/**
 *  This methods entry is optional so,
 *  We will have data only when the user enters the data
 *  otherwise, it will return empty string
 * @param {*} testText 
 * @returns 
 */
function generateTest(testText) {
  if (!testText) {
    return ''
  }
  return `
  ## Tests
  ${testText}
  `
}

/**
 * I have tried everything on this but i couldn't get it what i want 
 * if you left me any comment about it, i would be appreciate it :)
 * Here I want to get the list of the table choices and return them as list but without ','
 * @param {*} tableChoices 
 * @returns 
 */
function generateTable(tableChoices) {
  const arr = tableChoices
  var arr2 = []
  for (let i = 0; i < arr.length; i++) {
    arr2.push(` - [${arr[i]}](#${arr[i].toLowerCase()})\n`)
  }

  return arr2;
}


/**
 * This function gets answer from user and 
 * if the user wants badge, it will add two badges choiced by me
 * otherwise, it will return empty string 
 * @param {*} badge 
 * @returns 
 */
function generateBadge(badge) {
  if (!badge) {
    return ''
  }

  return `
  ## Badges
  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/egemenelz/readme-generator)
  ![Language](https://img.shields.io/badge/language-JavaScript-yellow)
  `
}



// Function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, ...args } = data;
  return `# ${title}
  ${renderLicenseSection(args.license)} ${generateBadge(args.badges)}
  ## Description
  ${description}

  ## Table of Contents
  ${generateTable(args.tableOfContents)}
  
  ## Installation
  ${args.installation}
  
  ## Usage
  ${args.usage}
  
  
  ${generateCredits(args.credits)}
  

  ## Features
  ${args.features}
  
  
  ${generateContribute(args.contribute)} 
  
  
  ${generateTest(args.tests)}

  Any addittional questions, You can reach me at ${args.email} and ${args.githubAccount}
`;
}

module.exports = generateMarkdown;
