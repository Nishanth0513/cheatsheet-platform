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

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Developer Cheatsheets</h1>
          <p className="text-xl md:text-2xl mb-8">Quick references for programming languages, frameworks, and tools</p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div id="categories">
          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelectCategory={handleCategorySelect} 
          />
        </div>

        {cheatsheets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cheatsheets.map((cheatsheet) => (
              <CheatsheetCard key={cheatsheet.slug} cheatsheet={cheatsheet} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">No cheatsheets found</h3>
            <p className="mt-2 text-gray-500">
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