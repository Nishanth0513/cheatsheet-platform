// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css'
// Import global styles (must come after Bootstrap to override if needed)
import '../styles/globals.css'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import { ThemeProvider } from '../context/ThemeContext'

function MyApp({ Component, pageProps }) {
  // Initialize Bootstrap JavaScript on client side
  useEffect(() => {
    // Import Bootstrap JS only on client-side
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp