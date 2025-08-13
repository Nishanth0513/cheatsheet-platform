import Head from 'next/head'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import { getAllCheatsheets, getCheatsheetBySlug } from '../lib/cheatsheets'

export default function CheatsheetPage({ cheatsheet }) {
  if (!cheatsheet) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Cheatsheet Not Found</h1>
        <p className="mb-6">The cheatsheet you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>{cheatsheet.title} | Cheatsheet Platform</title>
        <meta name="description" content={cheatsheet.description} />
      </Head>

      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              &larr; Back to all cheatsheets
            </Link>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {cheatsheet.category}
              </span>
              {cheatsheet.version && (
                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  v{cheatsheet.version}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{cheatsheet.title}</h1>
            <p className="text-xl text-gray-600">{cheatsheet.description}</p>
            {cheatsheet.tags && cheatsheet.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap">
                {cheatsheet.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="cheatsheet-container">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                rehypePlugins={[rehypeSlug, [rehypePrism, { ignoreMissing: true }]]}
                remarkPlugins={[remarkGfm]}
                className="markdown-content"
              >
                {cheatsheet.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const cheatsheets = getAllCheatsheets()
  
  return {
    paths: cheatsheets.map((sheet) => ({
      params: { slug: sheet.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const cheatsheet = getCheatsheetBySlug(params.slug)
  
  if (!cheatsheet) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      cheatsheet,
    },
  }
}