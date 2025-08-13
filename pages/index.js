import { useState, useEffect } from 'react'
import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import CheatsheetCard from '../components/CheatsheetCard'
import { getAllCheatsheets, getAllCategories, searchCheatsheets } from '../lib/cheatsheets'

export default function Home({ initialCheatsheets, categories }) {
  const [cheatsheets, setCheatsheets] = useState(initialCheatsheets)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Filter cheatsheets when category or search query changes
  useEffect(() => {
    let filtered = initialCheatsheets
    
    // Apply search filter
    if (searchQuery) {
      filtered = searchCheatsheets(searchQuery, filtered)
    }
    
    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(sheet => sheet.category === selectedCategory)
    }
    
    setCheatsheets(filtered)
  }, [searchQuery, selectedCategory, initialCheatsheets])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div>
      <Head>
        <title>Cheatsheet Platform - Quick References for Developers</title>
        <meta name="description" content="Find and browse developer cheatsheets and quick references" />
      </Head>

      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">Developer Cheatsheets</h1>
          <p className="lead mb-4">Quick references for programming languages, frameworks, and tools</p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="container py-5">
        <div id="categories">
          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelectCategory={handleCategorySelect} 
          />
        </div>

        {cheatsheets.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {cheatsheets.map((cheatsheet) => (
              <div className="col" key={cheatsheet.slug}>
                <CheatsheetCard cheatsheet={cheatsheet} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <h3 className="fw-medium text-secondary">No cheatsheets found</h3>
            <p className="mt-2 text-muted">
              {searchQuery ? 'Try a different search term or category' : 'Add some cheatsheets to get started'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const cheatsheets = getAllCheatsheets()
  const categories = getAllCategories()

  return {
    props: {
      initialCheatsheets: cheatsheets,
      categories,
    },
  }
}