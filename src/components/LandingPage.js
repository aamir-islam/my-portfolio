import React from 'react'
import styled from 'styled-components'
import { useNav } from '../hooks/useNav'
import { motion } from 'framer-motion'
const StyledLandingPage = styled.section`
  /* background-color: ${(props) => props.theme.navbar.body}; */
  /* transition: ${(props) => props.theme.themeTransition.transition}; */
  min-height: 100vh;
  /* border: 2px solid red; */
  width: 80%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  /* box-sizing: border-box; */
  letter-spacing: 1.1px;
  & > * {
    -webkit-font-smoothing: antialiased;
  }
  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
  }
`
const StyledLeft = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  height: 500px;
  background-position: center;
  @media (max-width: 500px) {
    width: 90%;
    height: 320px;
    /* margin-top: -5rem; */
  }
`
const StyledRight = styled.div`
  width: 50%;
  /* border: 1px solid tan; */
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    /* border: 1px solid rosybrown; */
    min-width: 300px;
    width: 60%;
    height: auto;
  }
`

const StyledH4 = styled.h4`
  font-size: 20px;
  font-weight: 400;
  padding-left: 0.9rem;
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 8px;

  @media (max-width: 500px) {
    padding-left: 0.4rem;
  }
`
const StyledH1 = styled.h1`
  font-size: clamp(35px, 8vw, 80px);
  font-weight: 600;
  line-height: 1.1;
  font-family: 'Inter', sans-serif;
`
const StyledH3 = styled.h3`
  font-size: clamp(10px, 5.5vw, 50px);
  font-weight: 600;
  margin: 8px 0;
  font-family: 'Inter', sans-serif;
`
const StyledP = styled.p`
  /* width: 650px; */
  max-width: 650px;
  font-size: 20px;
  /* border: 1px solid rebeccapurple; */
  line-height: 1.2;
  @media (max-width: 500px) {
    width: 100%;
    font-size: 16px;
    margin-top: 5px;
  }
`
const LandingPage = ({ isOpen }) => {
  const landingPageRef = useNav('Home') // this is the ref for the navbar

  return (
    <StyledLandingPage ref={landingPageRef} id='landingContainer'>
      <StyledLeft>
        <motion.div
          animate={{ opacity: 1, x: ['-100px', '0px'] }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          <StyledH4>Hi, my name is</StyledH4>
          <StyledH1>Aryaman Singh.</StyledH1>
          <StyledH3>A Frontend Developer.</StyledH3>
          <StyledP>
            I&apos;m a software engineer intern at Cognizant. An autodidact
            frontend developer with a passion for creating and building things.
            I like to craft solid and scalable frontend products with great user
            experiences.
          </StyledP>
        </motion.div>
      </StyledLeft>
      <StyledRight>
        <img
          src='images/Programming.gif'
          alt='hero image'
          aria-label='hero image'
        />
      </StyledRight>
    </StyledLandingPage>
  )
}

export default LandingPage
