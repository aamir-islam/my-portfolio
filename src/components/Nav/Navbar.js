import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import NavLink from './NavLink'
import { navLinks } from './navLinks'
import { RiLinkedinFill } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'
import { RiTwitterLine } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi'
import MoonSvg from '../assets/MoonSvg'
import SunSvg from '../assets/SunSvg'

const StyledNavbar = styled.nav`
  background-color: ${(props) => props.theme.navbar.body};
  width: 100%;
  position: sticky;
  z-index: 10;
  top: 0;
  padding: 1.2em 0;
  color: ${(props) => props.theme.navbar.text};
  max-height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: ${(props) => props.theme.themeTransition.transition};
`
const StyledName = styled.span`
  color: white;
  font-size: 28px;
  font-weight: 900;
`
const StyledIcons = styled.span`
  & > * {
    font-size: 24px;
    margin: 0 0.4rem;
    cursor: pointer;
    align-self: center;
  }
`
const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: 'hsl(40, 100%, 50%)'; 
  &:hover {
    color: 'hsl(40, 100%, 70%)';
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
        <Button onClick={toggleTheme}>
          {theme === 'lightTheme' ? <MoonSvg /> : <SunSvg />}
        </Button>
      </StyledIcons>
    </StyledNavbar>
  )
}

export default Navbar
