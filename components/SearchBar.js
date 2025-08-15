import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <div className="container mb-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSearch}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Search cheatsheets..."
                className="form-control"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  borderRadius: '30px 0 0 30px',
                  padding: '0.75rem 1.25rem',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                  border: '1px solid var(--border-color)'
                }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  borderRadius: '0 30px 30px 0',
                  padding: '0.75rem 1.5rem',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  fontWeight: '500'
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}