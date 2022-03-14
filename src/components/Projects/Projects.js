import React from 'react'
import styled from 'styled-components'
import { useNav } from '../../hooks/useNav'

const StyledProjects = styled.section`
  background-color: lightcoral;
  height: 94vh;
  width: 100%;

`
const Projects = () => {
  const projectsRef = useNav('Projects')

  return (
    <StyledProjects id='projectsContainer' ref={projectsRef}>
      Projects
    </StyledProjects>
  )
}

export default Projects
