import React from 'react'
import styled from 'styled-components'
import { useNav } from '../hooks/useNav'

const StyledLandingPage = styled.section`
  /* background-color: ${(props) => props.theme.navbar.body}; */
  /* transition: ${(props) => props.theme.themeTransition.transition}; */
  height: 100vh;
  /* box-sizing: border-box; */
`
const LandingPage = ({ isOpen }) => {
  const landingPageRef = useNav('Home')

  return (
    <StyledLandingPage ref={landingPageRef} id='landingContainer'>
      <h4>Hi, my name is</h4>
      <h1>Aryaman Singh</h1>
    </StyledLandingPage>
  )
}

export default LandingPage
