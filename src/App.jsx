import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Preload images and resources
    const preloadImages = () => {
      const imageUrls = [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      ]

      const promises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = url
          img.onload = resolve
          img.onerror = reject
        })
      })

      return Promise.all(promises)
    }

    // Wait for everything to load - REDUCED TO 750ms (half of 1500ms)
    Promise.all([
      preloadImages(),
      new Promise(resolve => setTimeout(resolve, 750)) // Reduced from 1500ms to 750ms
    ]).then(() => {
      setTimeout(() => setLoading(false), 150) // Reduced from 300ms to 150ms
    }).catch(() => {
      setTimeout(() => setLoading(false), 1000) // Reduced from 2000ms to 1000ms
    })
  }, [])

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <div key="content" className="min-h-screen bg-gray-50">
            <ScrollToTop />
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Team />
            <Contact />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </Router>
  )
}

export default App