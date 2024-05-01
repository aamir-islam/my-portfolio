import React from "react";
import styled from "styled-components/macro";
import { useNav } from "../hooks/useNav";
import Particle from "./Particles";
import { Fade } from "react-awesome-reveal";

const StyledWrapper = styled.section`
  -webkit-transition: background-image 0.5s linear;
  transition: background-image 0.5s linear;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledLandingPage = styled.section`
  color: ${(props) => props.theme.landingPage.text};
  transition: color 0.5s linear;
  min-height: 90vh;
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
    min-height: 96vh;
    margin-top: -2rem;
    flex-direction: column;
  }
`;
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
`;
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
`;

const StyledH4 = styled.h4`
  font-size: 20px;
  font-weight: 400;
  padding-left: 0.9rem;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 8px;
  transition: color 0.5s linear;
  @media (max-width: 500px) {
    padding-left: 0.4rem;
    padding-top: 1rem;
  }
`;
const StyledH1 = styled.h1`
  font-size: clamp(35px, 8vw, 80px);
  font-weight: 600;
  line-height: 1.1;
  transition: color 0.5s linear;
  font-family: "Inter", sans-serif;
`;
const StyledH3 = styled.h3`
  font-size: clamp(10px, 5.5vw, 50px);
  font-weight: 600;
  margin: 8px 0;
  transition: color 0.5s linear;
  font-family: "Inter", sans-serif;
`;
const StyledP = styled.p`
  /* width: 650px; */
  max-width: 650px;
  font-size: 20px;
  transition: color 0.5s linear;
  color: ${(props) => props.theme.lightText};
  line-height: 1.5;
  @media (max-width: 500px) {
    width: 100%;
    font-size: 16px;
    margin-top: 5px;
  }
`;
const Button = styled.button`
  /* background: #404040; */
  display: block;
  color: ${(props) => props.theme.body};
  padding: 1.25rem 1.75rem;
  margin: 2rem 0;
  cursor: pointer;
  font-size: 13px;
  font-family: "Roboto Mono", monospace;
  border: none;
  border-radius: 4px;
  transition: ${(props) => props.theme.themeTransition.transition};
  /* background: #2f2f2f; */
  background-color: ${(props) => props.theme.buttonColor};
  &:hover {
    filter: brightness(1.2);
    /* background: black; */
  }
`;

const LandingPage = ({ theme }) => {
  const landingPageRef = useNav("Home"); // this is the ref for the navbar
  const showResume = () => {
    window.open(
      "https://drive.google.com/file/d/1Km1edUkPwaEC1rMMZs7Ge_RW-DoM8VI6/view?usp=drive_link"
    );
  };
  return (
    <StyledWrapper ref={landingPageRef} id="landingContainer">
      <div style={{ position: "relative" }}>
        <Particle />
        <StyledLandingPage>
          <StyledLeft>
            <Fade cascade damping="0.6" triggerOnce>
              <StyledH4
                aria-label="hi my name is"
                role="article"
                tabIndex="0"
                title="hi my name is"
              >
                Hi, my name is
              </StyledH4>
              <StyledH1
                aria-label="I am a software engineer"
                role="article"
                tabIndex="0"
              >
                Aamir Islam.
              </StyledH1>
              <StyledH3
                aria-label="A frontend developer"
                role="article"
                tabIndex="0"
              >
                A Frontend Developer.
              </StyledH3>
              <StyledP aria-label="paragraph" role="article" tabIndex="0">
                I&apos;m a experienced Frontend Developer with 2+ years of
                expertise in building robust frontend solutions. Skilled in
                initiating SAAS projects, optimizing load times, and enhancing
                user experiences. Proficient in JavaScript, React JS, Redux, and
                advanced optimization techniques.
              </StyledP>
              <Button onClick={showResume}>See My Resume</Button>
            </Fade>
          </StyledLeft>
          <StyledRight>
            <Fade delay={500} direction="up" triggerOnce>
              <img
                src={
                  theme === "darkTheme"
                    ? "images/landingHero.svg"
                    : "images/landingHeroInvert.svg"
                }
                alt="hero"
                aria-label="hero"
              />
            </Fade>
          </StyledRight>
        </StyledLandingPage>
      </div>
    </StyledWrapper>
  );
};

export default LandingPage;
