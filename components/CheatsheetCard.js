import Link from 'next/link'

export default function CheatsheetCard({ cheatsheet }) {
  return (
    <div className="card h-100 shadow-sm hover-shadow" style={{ borderRadius: '0.75rem', transition: 'all 0.3s ease' }}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge bg-primary" style={{ borderRadius: '12px', padding: '0.4rem 0.8rem' }}>{cheatsheet.category}</span>
          {cheatsheet.version && (
            <span className="badge bg-light text-dark" style={{ borderRadius: '12px', padding: '0.4rem 0.8rem' }}>
              v{cheatsheet.version}
            </span>
          )}
        </div>
        <h5 className="card-title fw-bold">{cheatsheet.title}</h5>
        <p className="card-text text-muted mb-3" style={{overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
          {cheatsheet.description}
        </p>
        <div className="d-flex flex-wrap gap-1 mb-3">
          {cheatsheet.tags && cheatsheet.tags.map((tag) => (
            <span key={tag} className="badge bg-secondary" style={{ borderRadius: '12px', padding: '0.35rem 0.7rem', fontSize: '0.75rem' }}>
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/${cheatsheet.slug}`} className="stretched-link"></Link>
      </div>
    </div>
  )
}