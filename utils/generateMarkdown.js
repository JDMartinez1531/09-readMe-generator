function generateMarkdown(data) {
  return `
# ${data.title}
<img src="https://img.shields.io/badge/${data.label}-${data.message}-${data.color}" alt="${data.label}" />\n
## ${data.description}
---
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

---

## Installation
​
${data.installation}

---

## Usage

${data.usage}

---

## Contribute

${data.contribute}

---


`;
}

module.exports = generateMarkdown;
