import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { FiFolder } from 'react-icons/fi/index.esm'
import { FiGithub, FiExternalLink } from 'react-icons/fi/index.esm'
import { OtherProjects } from '../assets/projects'
import { Fade } from 'react-awesome-reveal'

const StyledMoreProjectsWrapper = styled.section`
  /* border: 1px solid teal; */
  width: 100%;
  box-sizing: border-box;
  box-sizing: border-box;
`

const StyledMoreProjects = styled.section`
  /* border: 1px solid red; */
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  margin-bottom: 5rem;
  color: #404040;
  max-width: 1000px;

  @media (max-width: 790px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 85%;
  }
`

const H3 = styled.h3`
  font-size: clamp(35px, 5vw, 60px);
  text-align: center;
  margin: 7rem 0;
  font-family: 'Inter', sans-serif;

  @media (max-width: 500px) {
    margin: 5rem 0;
  }
`
const StyledCardContainer = styled.div`
  /* border: 2px solid black; */
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 18px;
  /* justify-items: center; */
`

const StyledCard = styled.div`
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  padding: 1.5rem 1rem;
  border-radius: 5px;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset; */
  /* box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px; */
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 12px;
  height: 230px;
  &:hover {
    transform: translateY(-7px);
  }

  @media (max-width: 1180px) {
    /* height: 350px;
    width: 350px; */
  }

  .header {
    font-size: 40px;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    margin-bottom: 0.8rem;
    a {
      color: #404040;
      font-size: 24px;
      padding-left: 15px;

      &:hover {
        svg {
          transition: all 0.1s ease-in-out;
          transform: translateY(-3px) translateZ(0px);
        }
      }
    }
  }

  .project-title {
    font-size: 1.4rem;
    line-height: 1.1rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }

  .project-description {
    font-size: 17px;
    font-weight: 400;
    line-height: 1.3rem;
    margin-top: 1.2rem;
  }
  .languages {
    display: flex;
    margin-top: 1.2rem;
    font-size: 13px;
    float: left;
    justify-content: space-evenly;
    font-family: 'Roboto Mono', monospace;
    span {
      font-size: 12.5px;
      padding-right: 0.6rem;
    }
  }
`
const Button = styled.button`
  background: #404040;
  display: block;
  color: #fff;
  padding: 1.25rem 1.75rem;
  margin: 5rem auto 2rem auto;
  cursor: pointer;
  font-size: 13px;
  font-family: 'Roboto Mono', monospace;
  border: none;
  border-radius: 4px;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);;
  background: #2f2f2f;
  &:hover {
    background: black;
  }
`

const MoreProjects = () => {
  const [visible, setVisible] = useState(3)
  const [damping, setDamping] = useState(0.2)

  const showMoreProjects = () => {
    setDamping(0.08)
    if (visible < OtherProjects.length) setVisible((prevValue) => prevValue + 3)
    else setVisible(3)
  }

  const OtherProjectsWrapper = () => {
    return (
      <>
        <StyledCardContainer>
          <Fade cascade damping={damping} triggerOnce>
            {OtherProjects.slice(0, visible).map((project, index) => {
              return (
                <StyledCard key={index}>
                  <div className='header'>
                    <FiFolder />
                    <div>
                      <a
                        aria-label='Github link'
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        title='Github link'
                      >
                        <FiGithub />
                      </a>
                      <a
                        href={project.live}
                        target='_blank'
                        rel='noopener noreferrer'
                        title='Live link'
                        aria-label='Live link'
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  <div
                    className='project-title'
                    aria-label='project-title'
                    title='title'
                    role='article'
                  >
                    {project.title}
                  </div>
                  <p
                    className='project-description'
                    aria-label='project-description'
                    title='description'
                    role='article'
                  >
                    {project.description}
                  </p>
                  <div
                    className='languages'
                    aria-label='project languages'
                    title='languages used'
                  >
                    {project.languages.map((language, index) => {
                      return (
                        <span key={index} title={language}>
                          {language}
                        </span>
                      )
                    })}
                  </div>
                </StyledCard>
              )
            })}
          </Fade>
        </StyledCardContainer>
      </>
    )
  }
  return (
    <StyledMoreProjectsWrapper>
      <StyledMoreProjects>
        <H3 aria-level='1' title='more projects' aria-label='Other Projects'>
          Other Projects
        </H3>
        {OtherProjectsWrapper()}

        <Button onClick={showMoreProjects}>
          Show {visible === 12 ? 'Less' : 'More'}
        </Button>
      </StyledMoreProjects>
    </StyledMoreProjectsWrapper>
  )
}

export default MoreProjects
