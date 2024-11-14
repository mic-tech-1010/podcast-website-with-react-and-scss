import React from 'react'
import Container from '../components/js/Aboutpage/Container'
import History from '../components/js/Aboutpage/History'
import Founders from '../components/js/Aboutpage/Founders'
import Sponsors from '../components/js/Aboutpage/Sponsors'
import Contact from '../components/js/Aboutpage/Contact'
import Hero from '../components/js/Aboutpage/Hero'

const About = () => {
  return (
    <main>
      <Hero />
      <Container />
      <History />
      <Founders />
      <Sponsors />
      <Contact />  
    </main>
  )
}

export default About
