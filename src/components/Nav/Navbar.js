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
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { motion } from 'framer-motion'
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
const StyledLinks = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`
const StyledIcons = styled.span`
  & > * {
    font-size: 24px;
    margin: 0 0.4rem;
    cursor: pointer;
    align-self: center;
    transition: all 0.2s ease-in-out;
    @media (max-width: 768px) {
      display: none;
    }
  }
`
const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`
const HamburgerBtn = styled.i`
  font-size: 24px;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`
const StyledMobileMenu = styled.div`
  position: fixed;
  top: 75px;
  border: 1px solid pink;
  right: 0;
  height: 50vh;
  width: 100%;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 100%;
  }

  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  &:hover {
    color: lightgray;
  }
`
const StyledMobileLink = styled.div`
  color: black;
`

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    if (theme === 'lightTheme') setTheme('darkTheme')
    else setTheme('lightTheme')
  }

  const themeSwitch = () => {
    return (
      <Button onClick={toggleTheme}>
        {theme === 'lightTheme' ? <MoonSvg /> : <SunSvg />}
      </Button>
    )
  }
  const mobileMenu = () => {
    return (
      <StyledMobileMenu>
        {navLinks.map(({ navLinkId, scrollToId }, idx) => {
          return (
            <StyledMobileLink onClick={() => setIsOpen(!isOpen)} key={idx}>
              <NavLink
                key={idx}
                navLinkId={navLinkId}
                scrollToId={scrollToId}
              />
            </StyledMobileLink>
          )
        })}
      </StyledMobileMenu>
    )
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledNavbar>
      <StyledName>Aryaman Singh</StyledName>
      <StyledLinks>
        {navLinks.map(({ navLinkId, scrollToId }, idx) => {
          return (
            <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
          )
        })}
      </StyledLinks>
      <StyledIcons>
        <RiLinkedinFill />
        <FiGithub />
        <RiTwitterLine />
        <HiOutlineMail />
        {themeSwitch()}
      </StyledIcons>
      <HamburgerBtn>
        <span
          style={{
            display: 'flex',
            width: '70px',
            justifyContent: 'space-between',
          }}
        >
          {themeSwitch()}

          {isOpen ? (
            <motion.div
              animate={{ rotate: 360, x: ['25px', '0px'] }}
              transition={{ type: 'spring', damping: 25, delayChildren: 0.5 }}
            >
              <ImCross onClick={() => setIsOpen(false)} />
            </motion.div>
          ) : (
            <motion.div
              animate={{ x: ['25px', '0px'] }}
              transition={{ type: 'spring', damping: 25, delayChildren: 0.5 }}
            >
              <GiHamburgerMenu onClick={() => setIsOpen(true)} />
            </motion.div>
          )}
        </span>
      </HamburgerBtn>
      {isOpen && mobileMenu()}
    </StyledNavbar>
  )
}

export default Navbar
