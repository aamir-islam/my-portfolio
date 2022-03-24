import React from 'react'
import AboutMe from './AboutMe'
import LandingPage from './LandingPage'
import MoreProjects from './Projects/MoreProjects'
import Projects from './Projects/Projects'

const Main = ({ theme, isOpen }) => {
  return (
    <div
      style={{
        filter: isOpen ? 'blur(2px) brightness(0.9)' : 'blur(0px)',
        boxSizing: 'border-box',
        backgroundColor: theme === 'lightTheme' ? '#171A23' : '#FFFFFF',
        transition: 'background-color 0.5s linear',
      }}
    >
      <LandingPage theme={theme} />
      <AboutMe theme={theme} />
      <Projects />
      <MoreProjects />
    </div>
  )
}

export default Main
