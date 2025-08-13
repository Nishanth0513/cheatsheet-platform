import path from 'path'
import matter from 'gray-matter'
import lunr from 'lunr'

// Use fs only on the server side
const fs = typeof window === 'undefined' ? require('fs') : null
const cheatsheetsDirectory = path.join(process.cwd(), 'content')

// Get all cheatsheet files
export function getCheatsheetFiles() {
  // This function should only be called on the server side
  if (typeof window !== 'undefined') {
    console.error('getCheatsheetFiles should only be called from getStaticProps or getServerSideProps')
    return []
  }
  
  try {
    return fs.readdirSync(cheatsheetsDirectory).filter(file => file.endsWith('.md'))
  } catch (error) {
    console.error('Error reading cheatsheet directory:', error)
    return []
  }
}

// Get all cheatsheets with metadata
export function getAllCheatsheets() {
  // This function should only be called on the server side
  if (typeof window !== 'undefined') {
    console.error('getAllCheatsheets should only be called from getStaticProps or getServerSideProps')
    return []
  }
  
  const files = getCheatsheetFiles()
  
  const cheatsheets = files.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const fullPath = path.join(cheatsheetsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title,
      description: data.description || '',
      category: data.category || 'Uncategorized',
      tags: data.tags || [],
      version: data.version || null,
      content: content.trim(),
    }
  })
  
  // Sort cheatsheets by title
  return cheatsheets.sort((a, b) => a.title.localeCompare(b.title))
}

// Get a single cheatsheet by slug
export function getCheatsheetBySlug(slug) {
  // This function should only be called on the server side
  if (typeof window !== 'undefined') {
    console.error('getCheatsheetBySlug should only be called from getStaticProps or getServerSideProps')
    return null
  }
  
  try {
    const fullPath = path.join(cheatsheetsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title,
      description: data.description || '',
      category: data.category || 'Uncategorized',
      tags: data.tags || [],
      version: data.version || null,
      content: content.trim(),
    }
  } catch (error) {
    console.error(`Error reading cheatsheet ${slug}:`, error)
    return null
  }
}

// Get all unique categories
export function getAllCategories() {
  // This function should only be called on the server side
  if (typeof window !== 'undefined') {
    console.error('getAllCategories should only be called from getStaticProps or getServerSideProps')
    return []
  }
  
  const cheatsheets = getAllCheatsheets()
  const categories = new Set(cheatsheets.map(sheet => sheet.category))
  return Array.from(categories)
}

// Build search index
export function buildSearchIndex(cheatsheets) {
  const idx = lunr(function() {
    this.ref('slug')
    this.field('title', { boost: 10 })
    this.field('description', { boost: 5 })
    this.field('category')
    this.field('tags')
    this.field('content')
    
    cheatsheets.forEach(function(doc) {
      // Create a document with all searchable fields
      const searchDoc = {
        slug: doc.slug,
        title: doc.title,
        description: doc.description,
        category: doc.category,
        tags: doc.tags.join(' '),  // Convert tags array to space-separated string
        content: doc.content
      }
      this.add(searchDoc)
    }, this)
  })
  
  return idx
}

// Search cheatsheets
export function searchCheatsheets(query, cheatsheets) {
  if (!query.trim()) {
    return cheatsheets
  }
  
  const idx = buildSearchIndex(cheatsheets)
  const results = idx.search(query)
  
  // Map search results to cheatsheet objects
  return results.map(result => {
    return cheatsheets.find(sheet => sheet.slug === result.ref)
  })
}