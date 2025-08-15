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
                className={`btn btn-sm ${theme === 'light' ? 'btn-outline-primary' : 'btn-outline-light'}`}
                aria-label="Toggle theme"
                style={{
                  borderRadius: '20px',
                  padding: '0.375rem 0.75rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px var(--card-shadow)'
                }}
              >
                {theme === 'light' ? (
                  <span>🌙 Dark Mode</span>
                ) : (
                  <span>☀️ Light Mode</span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}