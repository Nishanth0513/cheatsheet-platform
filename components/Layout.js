import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Head>
        <title>Cheatsheet Platform</title>
      </Head>
      <Navbar />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </div>
  )
}