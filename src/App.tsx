import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import History from './components/History'
import Projects from './components/Projects'
// import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTIONS = [
  { id: 'hero', label: 'Accueil' },
  { id: 'skills', label: 'Compétences' },
  { id: 'history', label: 'Parcours' },
  { id: 'projects', label: 'Projets' },
  // { id: 'contact', label: 'Contact' },
] as const

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Nav items={SECTIONS} scrolled={scrolled} />
      <main>
        <Hero />
        <Skills />
        <History />
        <Projects />
        {/* <Contact /> */}
        <Footer />
      </main>
    </>
  )
}
