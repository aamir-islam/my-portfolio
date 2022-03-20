import React from 'react'
import styled from 'styled-components'
import { useNav } from '../../hooks/useNav'
import { FiGithub } from 'react-icons/fi'
import { FiExternalLink } from 'react-icons/fi'
import { FeaturedProjectsList } from '../assets/projects'

const StyledProjectsWrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
  min-height: 92vh;
`

const StyledProjects = styled.section`
  width: 80%;
  margin: 0 auto;
  color: #404040;

  @media (max-width: 787px) {
    /* width: %; */
  }
  @media (max-width: 500) {
    width: 95%;
  }
`
const H3 = styled.h3`
  font-size: clamp(40px, 5.5vw, 60px);
  margin-bottom: 2rem;
  margin-top: 4.5rem;
  font-family: 'Inter', sans-serif;
  display: flex;

  &::after {
    content: '';
    display: block;
    position: relative;
    top: 37px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: #404040;
  }
  @media (max-width: 913px) {
    &::after {
      content: none;
    }
  }

  @media (max-width: 500px) {
    margin-top: 4.5rem;
  }
`
const P = styled.p`
  line-height: 1.2;
  font-size: clamp(18px, 4vw, 22px);
  max-width: 650px;
  @media (max-width: 500px) {
    margin-bottom: 2rem;
  }
`
const StyledFeaturedProjectsWrapper = styled.div`
  /* border: 1px solid #404040; */
`

const StyledFeaturedProjects = styled.div`
  /* border: 1px solid #404040; */
  display: flex;
  max-width: 1000px;
  margin: 2rem auto;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
  }
`
const StyledLeft = styled.div`
  width: 50%;
  /* border: 1px solid teal; */
  height: 400px;
  text-align: right;
  /* background: url('images/typing.PNG'); */
  background: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    transform: translateY(-5px) translateZ(0px);
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 280px;
    opacity: 0.4;
  }
`
const StyledRight = styled.div`
  width: 50%;
  /* border: 1px solid orange; */
  min-height: 00px;
  max-width: 26rem;
  z-index: 2;

  h2 {
    text-align: right;
    font-size: 1.5rem;
    line-height: 2rem;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;

    @media (max-width: 500px) {
      text-align: left;
    }
  }
  h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    letter-spacing: 0.3px;
    margin-bottom: 1rem;
    text-align: right;
    font-size: 1.1rem;
    line-height: 1.75rem;
    color: rgba(64, 64, 64, 1);

    @media (max-width: 500px) {
      text-align: left;
      margin-bottom: 0;
    }
  }
  p {
    text-align: right;
    margin-left: -100px;
    font-size: 1rem;
    font-weight: 400;
    padding: 1.5rem 2rem;
    min-height: 60px;
    box-shadow: 0 4px 20px rgb(0 0 0 / 25%);
    max-width: 30rem;
    background-color: #ffffff;
    border-radius: 0.375rem;
    z-index: 2;

    @media (max-width: 769px) {
      padding: 0.8rem 1rem;
    }
    @media (max-width: 500px) {
      margin-left: 0;
      box-shadow: none;
      background-color: transparent;
      font-weight: 500;
      color: black;
      text-align: left;
      padding: 1.5rem 0;
    }
  }
  @media (max-width: 500px) {
    margin-top: -282px;
    width: 100%;
    color: black;
    z-index: 999;
  }
`
const StyledLanguagesUsed = styled.div`
  display: flex;
  /* max-width: 95  %; */
  /* border: 1px solid red; */
  margin-top: 2rem;
  float: right;
  font-size: 13px;
  justify-content: space-evenly;
  font-family: 'Roboto Mono', monospace;
  span {
    padding-left: 0.4rem;

    @media (max-width: 500px) {
      padding-left: 0;
      padding-right: 0.5rem;
    }
  }
  @media (max-width: 500px) {
    float: left;
    margin-top: 0rem;
  }
`
const StyledLinks = styled.div`
  margin-top: 4rem;
  font-size: 24px;
  text-align: right;
  a {
    &:first-of-type {
      padding-right: 1rem;
    }
  }
  @media (max-width: 500px) {
    margin-top: 1.7rem;
    text-align: left;
  }
`

const Projects = () => {
  const projectsRef = useNav('Projects')
  return (
    <StyledProjectsWrapper>
      <StyledProjects id='projectsContainer' ref={projectsRef}>
        <H3>Some Things I’ve Built</H3>
        <P>
          Here are some of my most favourite projects that I enjoyed coding and
          designing from scratch.
        </P>
        {/* <StyledFeaturedProjectsWrapper> */}
        {FeaturedProjectsList.map((project) => {
          return (
            <StyledFeaturedProjects key={project.id}>
              <StyledLeft url={project.img}></StyledLeft>
              <StyledRight>
                <h2>{project.title}</h2>
                <h1>{project.subject}</h1>
                <p>{project.description}</p>

                <StyledLanguagesUsed>
                  {project.languages.map((language) => {
                    return <span key={language}>{language}</span>
                  })}
                </StyledLanguagesUsed>
                <StyledLinks>
                  <a href={project.github} target='_blank' rel='noreferrer'>
                    <FiGithub />
                  </a>
                  <a>
                    <FiExternalLink />
                  </a>
                </StyledLinks>
              </StyledRight>
            </StyledFeaturedProjects>
          )
        })}

        {/* </StyledFeaturedProjectsWrapper> */}
      </StyledProjects>
    </StyledProjectsWrapper>
  )
}

export default Projects
