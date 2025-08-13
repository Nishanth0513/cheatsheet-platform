# Cheatsheet Platform

A static site for developer cheatsheets and quick references built with Next.js, Tailwind CSS, and Markdown.

## Features

- Static site generation from Markdown files
- Clean, responsive UI with Tailwind CSS
- Full-text search functionality
- Category and tag filtering
- Syntax highlighting for code blocks
- Easy contribution process

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/cheatsheet-platform.git
cd cheatsheet-platform
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── components/       # React components
├── content/          # Markdown cheatsheets
├── lib/              # Utility functions
├── pages/            # Next.js pages
├── public/           # Static assets
├── styles/           # CSS styles
├── CONTRIBUTING.md   # Contribution guidelines
└── README.md         # Project documentation
```

## Adding a New Cheatsheet

1. Create a new Markdown file in the `content` directory
2. Add frontmatter metadata at the top of the file
3. Write your cheatsheet content using Markdown

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the LICENSE file for details.