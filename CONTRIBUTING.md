# Contributing to the Cheatsheet Platform

Thank you for your interest in contributing to the Cheatsheet Platform! This document provides guidelines and instructions for contributing new cheatsheets or improving existing ones.

## How to Contribute

1. **Fork the repository** to your GitHub account
2. **Clone your fork** to your local machine
3. **Create a new branch** for your contribution
4. **Make your changes** following the guidelines below
5. **Commit your changes** with clear, descriptive commit messages
6. **Push your branch** to your fork on GitHub
7. **Submit a pull request** to the main repository

## Creating a New Cheatsheet

### File Structure

All cheatsheets are stored as Markdown files in the `/content` directory. The filename should be a slug version of the cheatsheet title (lowercase, hyphens instead of spaces).

Example: `javascript-es6.md` for a cheatsheet titled "JavaScript ES6".

### Frontmatter

Each cheatsheet must begin with frontmatter metadata in YAML format. Here's the required format:

```yaml
---
title: "Your Cheatsheet Title"
description: "A brief description of what this cheatsheet covers"
category: "Category Name"
tags: ["tag1", "tag2", "tag3"]
version: "1.0" # Optional
---
```

- **title**: The full title of your cheatsheet
- **description**: A brief (1-2 sentence) description of what the cheatsheet covers
- **category**: The main category for your cheatsheet (e.g., "Programming Languages", "Frameworks", "Tools")
- **tags**: An array of relevant tags to help with searching and filtering
- **version**: Optional version number if applicable (e.g., for specific software versions)

### Content Structure

Organize your cheatsheet content in a clear, scannable format. Here are some guidelines:

1. Use markdown headings (`##`, `###`) to organize sections
2. Use code blocks with language specification for syntax highlighting
3. Keep examples concise and focused
4. Use tables for comparing options or parameters
5. Use bullet points for lists of related items

### Example Structure

```markdown
---
title: "JavaScript ES6 Cheatsheet"
description: "Quick reference for ES6 features and syntax"
category: "Programming Languages"
tags: ["javascript", "es6", "frontend"]
version: "ES6"
---

## Arrow Functions

### Basic Syntax

```js
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

### Features

- Shorter syntax
- Implicit return for single expressions
- Does not bind its own `this` value

## Template Literals

...
```

## Style Guidelines

1. **Be concise**: Cheatsheets should be quick references, not tutorials
2. **Be accurate**: Double-check all syntax and examples
3. **Be consistent**: Follow the formatting patterns used in other cheatsheets
4. **Be comprehensive**: Cover the most important aspects of the topic
5. **Be organized**: Group related items together logically

## Pull Request Process

1. Ensure your cheatsheet follows all the guidelines above
2. Update the README.md if necessary to reflect your changes
3. Your pull request will be reviewed by maintainers
4. Address any feedback or requested changes
5. Once approved, your changes will be merged

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

## Questions?

If you have any questions about contributing, please open an issue in the repository.

Thank you for helping make the Cheatsheet Platform better for everyone!