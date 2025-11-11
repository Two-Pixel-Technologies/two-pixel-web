import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
// import Portfolio from './components/Portfolio'
// import Testimonials from './components/Testimonials'
import WhyWebsite from './components/WhyWebsite'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingShapes from './components/FloatingShapes'

function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <FloatingShapes />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyWebsite />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
