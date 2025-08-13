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
      <div className="container py-5 text-center">
        <h1 className="text-danger fw-bold mb-4">Cheatsheet Not Found</h1>
        <p className="mb-4">The cheatsheet you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className="btn btn-primary">
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
        <div className="container py-4">
          <div className="mb-4">
            <Link href="/" className="text-primary text-decoration-none">
              &larr; Back to all cheatsheets
            </Link>
          </div>

          <div className="mb-4">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge bg-primary rounded-pill">
                {cheatsheet.category}
              </span>
              {cheatsheet.version && (
                <span className="badge bg-secondary rounded-pill">
                  v{cheatsheet.version}
                </span>
              )}
            </div>
            <h1 className="display-5 fw-bold mb-3">{cheatsheet.title}</h1>
            <p className="lead text-secondary">{cheatsheet.description}</p>
            {cheatsheet.tags && cheatsheet.tags.length > 0 && (
              <div className="mt-3 d-flex flex-wrap gap-2">
                {cheatsheet.tags.map((tag) => (
                  <span key={tag} className="badge bg-light text-dark">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="cheatsheet-container">
            <div className="container-fluid">
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