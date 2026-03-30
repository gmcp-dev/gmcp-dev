import { useState, useEffect } from 'react'
import { useLang } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const { t } = useLang()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-container">
      <Navbar scrolled={scrollY > 50} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <p>{t.footer.replace('{year}', new Date().getFullYear())}</p>
      </footer>
    </div>
  )
}

export default App
