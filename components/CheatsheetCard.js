import Link from 'next/link'

export default function CheatsheetCard({ cheatsheet }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/${cheatsheet.slug}`} className="block h-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-600">{cheatsheet.category}</span>
            {cheatsheet.version && (
              <span className="text-xs bg-gray-200 rounded-full px-2 py-1">
                v{cheatsheet.version}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{cheatsheet.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{cheatsheet.description}</p>
          <div className="flex flex-wrap">
            {cheatsheet.tags && cheatsheet.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}