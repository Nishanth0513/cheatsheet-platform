import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="navbar navbar-expand-lg shadow">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">
          CheatSheet Platform
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#categories" className="nav-link">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item ms-2">
              <button 
                onClick={toggleTheme} 
                className="btn btn-sm btn-outline-primary" 
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <span>🌙 Dark</span>
                ) : (
                  <span>☀️ Light</span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}