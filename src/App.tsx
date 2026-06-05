import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingShapes from './components/FloatingShapes'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import WhyWebsite from './components/WhyWebsite'
import Contact from './components/Contact'
import PrivacyPolicySection from './components/PrivacyPolicySection'
import TermsSection from './components/TermsSection'

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
        <PrivacyPolicySection />
        <TermsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
