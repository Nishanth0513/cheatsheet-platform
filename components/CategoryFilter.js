export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-3">Categories</h5>
      <div className="d-flex flex-wrap gap-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`btn btn-sm ${!selectedCategory ? 'btn-primary' : 'btn-outline-secondary'}`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`btn btn-sm ${selectedCategory === category ? 'btn-primary' : 'btn-outline-secondary'}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}