import React from 'react'
import styled from 'styled-components'
import { useNav } from '../hooks/useNav'

const StyledAboutMe = styled.section`
  background-color: #f5f5f5;
  height: 100vh;
  width: 100%;

`
const AboutMe = () => {
  const aboutRef = useNav('About')
  return (
    <StyledAboutMe id='aboutContainer' ref={aboutRef}>
      AboutMe
    </StyledAboutMe>
  )
}

export default AboutMe
