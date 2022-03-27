import React, { Suspense } from 'react'
// import AboutMe from './AboutMe'
// import Blogs from './Blogs'
// import Contact from './Contact'
// import LandingPage from './LandingPage'
// import MoreProjects from './Projects/MoreProjects'
// import Projects from './Projects/Projects'

const LandingPage = React.lazy(() => import('.//LandingPage'))
const Projects = React.lazy(() => import('./Projects/Projects'))
const MoreProjects = React.lazy(() => import('./Projects/MoreProjects'))
const Contact = React.lazy(() => import('./Contact'))
const Blogs = React.lazy(() => import('./Blogs'))
const AboutMe = React.lazy(() => import('./AboutMe'))

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
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPage theme={theme} />
        <AboutMe theme={theme} />
        <Projects theme={theme} />
        <MoreProjects theme={theme} />
        <Blogs theme={theme} />
        <Contact />
      </Suspense>
    </div>
  )
}

export default Main
