import React, { useContext } from 'react'
import { NavContext } from '../../context/NavContext'
import styled from 'styled-components'

const Span = styled.span`
  font-size: 20px;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.2s ease;
  transition-delay: 0.25s;
  margin: 1em;
  padding-bottom: 0.3em;
  border-bottom: ${(props) => (props.borderBottom ? '1px solid gold' : 'none')};
  cursor: pointer;
  &:hover {
    cursor: pointer;
    border-bottom: ${(props) => props.theme.navbar.borderBottom};
  }
  @media (max-width: 768px) {
    &:hover {
      border-bottom: 1px solid black;
    }
  }
`
const NavLink = ({ navLinkId, scrollToId }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext)

  const handleClick = () => {
    setActiveNavLinkId(navLinkId)
    document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Span
      id={navLinkId}
      onClick={handleClick}
      borderBottom={activeNavLinkId === navLinkId ? true : ''}
      role='link'
      title={navLinkId}
      tabIndex='0'
    >
      {navLinkId}
    </Span>
  )
}

export default NavLink
