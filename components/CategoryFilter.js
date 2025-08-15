export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-3" style={{ color: 'var(--heading-color)' }}>Categories</h5>
      <div className="d-flex flex-wrap gap-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`btn btn-sm ${!selectedCategory ? 'btn-primary' : 'btn-outline-secondary'}`}
          style={{
            borderRadius: '20px',
            padding: '0.4rem 0.9rem',
            transition: 'all 0.2s ease',
            boxShadow: !selectedCategory ? '0 2px 4px var(--card-shadow)' : 'none'
          }}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`btn btn-sm ${selectedCategory === category ? 'btn-primary' : 'btn-outline-secondary'}`}
            style={{
              borderRadius: '20px',
              padding: '0.4rem 0.9rem',
              transition: 'all 0.2s ease',
              boxShadow: selectedCategory === category ? '0 2px 4px var(--card-shadow)' : 'none'
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}