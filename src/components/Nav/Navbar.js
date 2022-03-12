import React, { useEffect } from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'
import { navLinks } from './navLinks'
import { RiLinkedinFill } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'
import { RiTwitterLine } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi'

const StyledNavbar = styled.nav`
  background-color: ${(props) => props.theme.navbar.body};
  width: 100%;
  position: sticky;
  z-index: 10;
  top: 0;
  padding: 1.2em 0;
  color: ${(props) => props.theme.navbar.text};
  max-height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledName = styled.span`
  color: white;
  font-size: 28px;
  font-weight: 900;
`
const StyledIcons = styled.span`
  & > * {
    font-size: 20px;
    margin: 0 1rem;
  }
`
const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    if (theme === 'lightTheme') setTheme('darkTheme')
    else setTheme('lightTheme')
  }
  return (
    <StyledNavbar>
      <StyledName>Aryaman Singh</StyledName>
      <span>
        {navLinks.map(({ navLinkId, scrollToId }, idx) => {
          return (
            <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
          )
        })}
      </span>
      <StyledIcons>
        <RiLinkedinFill />
        <FiGithub />
        <RiTwitterLine />
        <HiOutlineMail />
        <button onClick={toggleTheme}>Switch</button>
      </StyledIcons>
    </StyledNavbar>
  )
}

export default Navbar
