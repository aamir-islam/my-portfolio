import React from 'react'
import styled from 'styled-components'
import { useNav } from '../hooks/useNav'

const StyledLandingPage = styled.section`
  background-color: ${(props) => props.theme.navbar.body};
  height: 100vh;
  transition: ${(props) => props.theme.themeTransition.transition};

`

const LandingPage = () => {
  const landingPageRef = useNav('Home')

  return (
    <StyledLandingPage ref={landingPageRef} id='landingContainer'>
      LandingPage
    </StyledLandingPage>
  )
}

export default LandingPage
