import React from 'react'
import styled from 'styled-components'
import { useNav } from '../hooks/useNav'
import { motion } from 'framer-motion'

const StyledWrapper = styled.section`
  transition: ${(props) => props.theme.themeTransition.transition};
  background-image: ${(props) => props.theme.landingPage.backgroundImage};
  -webkit-transition: background-image 0.5s linear;
  transition: background-image 0.5s linear;
  background-repeat: no-repeat;
  background-size: cover;
`

const StyledLandingPage = styled.section`
  color: ${(props) => props.theme.landingPage.text};
  transition: color 0.5s linear;
  min-height: 101vh;
  width: 80%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  letter-spacing: 1.1px;
  & > * {
    -webkit-font-smoothing: antialiased;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-top: -2rem;
    flex-direction: column;
  }
`
const StyledLeft = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  height: 500px;
  background-position: center;
  @media (max-width: 999px) {
    height: 700px;
  }
  @media (max-width: 500px) {
    width: 90%;
    height: 250px;
  }
`
const StyledRight = styled.div`
  width: 50%;
  /* border: 1px solid tan; */
  display: flex;
  height: 700px;
  align-items: flex-start;
  justify-content: center;
  img {
    /* border: 1px solid rosybrown; */
    min-width: 350px;
    width: 80%;
    height: 550px;
    @media (max-width: 500px) {
      height: 350px;
    }
  }
  @media (max-width: 500px) {
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
const LandingPage = ({ theme }) => {
  const landingPageRef = useNav('Home') // this is the ref for the navbar
  return (
    <StyledWrapper ref={landingPageRef} id='landingContainer'>
      <StyledLandingPage>
        <StyledLeft>
          <motion.div
            animate={{ opacity: 1, x: ['-100px', '0px'] }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <StyledH4
              aria-label='hi my name is'
              role='article'
              tabIndex='0'
              title='hi my name is'
            >
              Hi, my name is
            </StyledH4>
            <StyledH1
              aria-label='I am a software engineer'
              role='article'
              tabIndex='0'
            >
              Aryaman Singh.
            </StyledH1>
            <StyledH3
              aria-label='A frontend developer'
              role='article'
              tabIndex='0'
            >
              A Frontend Developer.
            </StyledH3>
            <StyledP aria-label='paragraph' role='article' tabIndex='0'>
              I&apos;m a software engineer intern at Cognizant. An autodidact
              frontend developer with a passion for creating and building
              things. I like to craft solid and scalable frontend products with
              great user experiences.
            </StyledP>
          </motion.div>
        </StyledLeft>
        <StyledRight>
          <motion.img
            src={
              theme === 'darkTheme'
                ? 'images/landingHero.svg'
                : 'images/landingHeroInvert.svg'
            }
            // src='images/Programming.gif'
            alt='hero image'
            aria-label='hero image'
            animate={{ opacity: 1, x: ['100px', '0px'] }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          />
        </StyledRight>
      </StyledLandingPage>
    </StyledWrapper>
  )
}

export default LandingPage
