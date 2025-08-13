import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Cheatsheet Platform</title>
        <meta name="description" content="About the Cheatsheet Platform" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">About the Cheatsheet Platform</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>
            The Cheatsheet Platform is a community-driven collection of quick references and cheatsheets for developers.
            Our goal is to provide concise, practical information that helps developers be more productive.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            We believe that having quick access to essential commands, syntax, and best practices can save developers
            hours of time. Our mission is to create the most comprehensive and well-organized collection of cheatsheets
            available anywhere.
          </p>
          
          <h2>How It Works</h2>
          <p>
            All of our cheatsheets are stored as Markdown files in a GitHub repository. This makes it easy for anyone
            to contribute by submitting a pull request with new content or improvements to existing cheatsheets.
          </p>
          
          <h2>Contributing</h2>
          <p>
            We welcome contributions from the community! If you'd like to add a new cheatsheet or improve an existing one,
            please check out our contribution guidelines.
          </p>
          
          <div className="mt-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}