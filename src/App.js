import React from 'react'
import Design from './components/design/Design'
import Footer from './components/footer/Footer'
import Information from './components/information/Information'
import NavigationBar from './components/navigationBar/NavigationBar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Design align="left" />
      <Information />
      <Design />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App