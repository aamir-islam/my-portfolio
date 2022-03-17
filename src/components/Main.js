import React from 'react'
import AboutMe from './AboutMe'
import LandingPage from './LandingPage'
import Projects from './Projects/Projects'

const Main = ({ theme, isOpen }) => {
  return (
    <div
      style={{
        filter: isOpen ? 'blur(2px) brightness(0.9)' : 'blur(0px)',
      }}
    >
      <LandingPage theme={theme} />
      <AboutMe theme={theme} />
      <Projects />
    </div>
  )
}

export default Main
