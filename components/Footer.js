import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: 'var(--navbar-bg)', borderTop: '1px solid var(--border-color)' }} data-bs-theme="dark">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h5 className="fw-bold mb-3" style={{ color: 'var(--heading-color)' }}>CheatSheet Platform</h5>
            <p className="text-light">
              A collection of quick references and cheatsheets for developers.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-3" style={{ color: 'var(--heading-color)' }}>Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/#categories" className="text-light text-decoration-none">
                  Categories
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-light text-decoration-none">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-3" style={{ color: 'var(--heading-color)' }}>Contribute</h5>
            <p className="text-light mb-3">
              Want to contribute? Check out our guidelines and submit a pull request.
            </p>
            <a
              href="https://github.com/Nishanth0513/cheatsheet-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
              style={{
                borderRadius: '20px',
                padding: '0.5rem 1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}
            >
              GitHub Repository
            </a>
          </div>
        </div>
        <div className="mt-4 pt-4 border-top border-secondary text-center" style={{ color: 'var(--text-color)', opacity: 0.8 }}>
          <p>&copy; {new Date().getFullYear()} CheatSheet Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}