import React from 'react'
import AboutMe from './AboutMe'
import LandingPage from './LandingPage'
import Projects from './Projects/Projects'

const Main = () => {
  return (
    <React.Fragment>
      <LandingPage />
      <AboutMe />
      <Projects />
    </React.Fragment>
  )
}

export default Main
