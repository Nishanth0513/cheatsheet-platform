import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">CheatSheet Platform</h5>
            <p className="text-light">
              A collection of quick references and cheatsheets for developers.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Links</h5>
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
            <h5 className="fw-bold mb-3">Contribute</h5>
            <p className="text-light mb-3">
              Want to contribute? Check out our guidelines and submit a pull request.
            </p>
            <a
              href="https://github.com/Nishanth0513/cheatsheet-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              GitHub Repository
            </a>
          </div>
        </div>
        <div className="mt-4 pt-4 border-top border-secondary text-center text-light">
          <p>&copy; {new Date().getFullYear()} CheatSheet Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}