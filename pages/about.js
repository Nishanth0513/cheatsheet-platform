import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Cheatsheet Platform</title>
        <meta name="description" content="About the Cheatsheet Platform" />
      </Head>

      <div className="container py-5">
        <h1 className="display-4 fw-bold mb-4">About the Cheatsheet Platform</h1>
        
        <div className="container-fluid">
          <p className="lead">
            The Cheatsheet Platform is a community-driven collection of quick references and cheatsheets for developers.
            Our goal is to provide concise, practical information that helps developers be more productive.
          </p>
          
          <h2 className="mt-4 mb-3">Our Mission</h2>
          <p>
            We believe that having quick access to essential commands, syntax, and best practices can save developers
            hours of time. Our mission is to create the most comprehensive and well-organized collection of cheatsheets
            available anywhere.
          </p>
          
          <h2 className="mt-4 mb-3">How It Works</h2>
          <p>
            All of our cheatsheets are stored as Markdown files in a GitHub repository. This makes it easy for anyone
            to contribute by submitting a pull request with new content or improvements to existing cheatsheets.
          </p>
          
          <h2 className="mt-4 mb-3">Contributing</h2>
          <p>
            We welcome contributions from the community! If you'd like to add a new cheatsheet or improve an existing one,
            please check out our contribution guidelines.
          </p>
          
          <div className="mt-5">
            <Link href="/" className="text-primary text-decoration-none">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}