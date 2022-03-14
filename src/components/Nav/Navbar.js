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
import { CgClose } from 'react-icons/cg'
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
    margin: 0 0.8rem;
    max-width: 250px;
    /* border: 1px solid palegoldenrod; */
    cursor: pointer;
    align-self: center;
    transition: all 0.2s ease-in-out;

    @media (max-width: 768px) {
      display: none;
    }
    @media (max-width: 1000px) {
      margin: 0 0.4rem;
    }
  }
`
const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: 770px) {
    font-size: 24px;
  }
`
const HamburgerBtn = styled.i`
  font-size: 24px;
  display: none;
  /* color: red; */
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`
const StyledMobileMenu = styled.div`
  position: fixed;
  top: 75px;
  /* border: 2px solid red; */
  right: 0;
  height: 50vh;
  width: 100%;
  z-index: 99;
  display: flex;
  border-radius: 0 0 20px 20px;
  background-color: #f7f7f7;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  /* @media screen and (min-width: 768px) {
    width: 100%;
  } */

  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`
const StyledMobileLink = styled.div`
  color: #0e1111;
  letter-spacing: 1.2px;
  font-weight: 600;
  &:hover {
    color: black;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`
const SocialMediaWrapper = styled.div`
  /* border: 1px solid pink; */
  display: flex;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  justify-content: space-around;
  width: 220px;
  font-size: 24px;
  color: #3b444b;
  min-height: 40px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  i:hover {
    color: black;
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }
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
  const SocialMediaIcons = () => {
    return (
      <>
        <i>
          <RiLinkedinFill />
        </i>
        <i>
          <FiGithub />
        </i>
        <i>
          <RiTwitterLine />
        </i>
        <i>
          <HiOutlineMail />
        </i>
      </>
    )
  }

  const mobileMenu = () => {
    return (
      <StyledMobileMenu>
        {navLinks.map(({ navLinkId, scrollToId }, idx) => {
          return (
            <motion.div animate={{ x: [200, 0] }}>
              <StyledMobileLink onClick={() => setIsOpen(!isOpen)} key={idx}>
                <NavLink
                  key={idx}
                  navLinkId={navLinkId}
                  scrollToId={scrollToId}
                />
              </StyledMobileLink>
            </motion.div>
          )
        })}
        <motion.div animate={{ x: [200, 0] }}>
          <SocialMediaWrapper>{SocialMediaIcons()}</SocialMediaWrapper>
        </motion.div>
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
        {SocialMediaIcons()}
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
              {/* <GrClose onClick={() => setIsOpen(false)} color='white'/> */}
              <CgClose size={'28px'} onClick={() => setIsOpen(false)} />
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
