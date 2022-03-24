import React from 'react'
import AboutMe from './AboutMe'
import LandingPage from './LandingPage'
import MoreProjects from './Projects/MoreProjects'
import Projects from './Projects/Projects'

const Main = ({ theme, isOpen }) => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        filter: isOpen ? 'blur(1px) brightness(0.6)' : 'blur(0px)',
        backgroundColor: theme === 'lightTheme' ? '#171A23' : '#FFFFFF',
        transition: 'background-color 0.5s linear, transform 0.15s linear',
        transform: isOpen ? 'scale(1.005)' : 'scale(1)',
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
