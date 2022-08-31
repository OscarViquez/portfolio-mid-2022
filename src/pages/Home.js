import React from 'react'
import Hero from '../components/layouts/Hero/Hero.layouts.component'
import About from '../components/layouts/About/About.layouts.component'
import Skills from '../components/layouts/Skills/Skills.layouts.component'
import Portfolio from '../components/layouts/Portfolio/Portfolio.layouts.component'
import Footer from '../components/common/Footer/Footer.common'
import Navbar from '../components/common/Navbar/Navbar.common'

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </main>
  )
}

export default Home