import React from 'react'
import styled from 'styled-components/macro'
import NavLink from './NavLink'
import { navLinks } from './navLinks'
import { HiOutlineMenu } from 'react-icons/hi/index.esm'
import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi/index.esm'
import { ImLinkedin2 } from 'react-icons/im/index.esm'
import { VscClose } from 'react-icons/vsc/index.esm'

import { motion } from 'framer-motion'
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
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  transition: ${(props) => props.theme.themeTransition.transition};
`
const StyledName = styled.span`
  transition: all 1.5s linear;
  img {
    height: 80px;
    width: 90px;
  }
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
    cursor: pointer;
    align-self: center;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.navbar.text};
      transition: all 0.2s ease-in-out;
      opacity: 0.8;
    }

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

  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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
  padding-top: 2px;
  min-height: 40px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  i:hover {
    color: black;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`

const Navbar = ({ isOpen, setIsOpen, theme, setTheme }) => {
  const toggleTheme = () => {
    if (theme === 'lightTheme') setTheme('darkTheme')
    else setTheme('lightTheme')
  }

  const themeSwitch = () => {
    return (
      <Button onClick={toggleTheme}>
        {theme === 'lightTheme' ? (
          <i
            role='button'
            title='dark theme moon button'
            aria-label='theme switcher button'
          >
            <MoonSvg />
          </i>
        ) : (
          <i
            role='button'
            title='light theme moon button'
            aria-label='theme switcher button'
          >
            <SunSvg />
          </i>
        )}
      </Button>
    )
  }
  const SocialMediaIcons = () => {
    return (
      <>
        <a
          href='https://www.linkedin.com/in/aryaman-singh2803/'
          target='_blank'
          rel='noopener noreferrer'
          role='menuitem'
          title='linkedin'
          tabIndex='0s'
          aria-label='linkedin icon'
        >
          <ImLinkedin2 />
        </a>
        <a
          href='https://github.com/Aryaman2803'
          target='_blank'
          rel='noopener noreferrer'
          role='menuitem'
          title='Github'
          tabIndex='0s'
          aria-label='github icon'
        >
          <FiGithub />
        </a>
        <i
          role='menuitem'
          title='Twitter'
          tabIndex='0s'
          aria-label='twitter icon'
        >
          <FiTwitter />
        </i>
        <i role='menuitem' title='Email' tabIndex='0s' aria-label='email icon'>
          <FiMail />
        </i>
      </>
    )
  }

  const mobileMenu = () => {
    return (
      <StyledMobileMenu>
        {navLinks.map(({ navLinkId, scrollToId }, idx) => {
          return (
            <motion.div animate={{ x: [200, 0] }} key={idx}>
              <StyledMobileLink onClick={() => setIsOpen(!isOpen)}>
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
          <SocialMediaWrapper role='menuitem'>
            {SocialMediaIcons()}
          </SocialMediaWrapper>
        </motion.div>
      </StyledMobileMenu>
    )
  }

  return (
    <StyledNavbar>
      <StyledName title='name' role='heading' aria-label='name'>
        <img
          src={
            theme === 'darkTheme'
              ? 'images/nameDark.png'
              : 'images/nameLight.png'
          }
          alt='initials'
          title='initials'
          tabIndex='0'
          aria-label='initials'
        />
      </StyledName>
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
      <HamburgerBtn aria-label='menu' role='menubar'>
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
              <VscClose
                size={'32px'}
                onClick={() => setIsOpen(false)}
                title='close'
                role='button'
              />
            </motion.div>
          ) : (
            <motion.div
              animate={{ x: ['25px', '0px'] }}
              transition={{ type: 'spring', damping: 25, delayChildren: 0.5 }}
            >
              <HiOutlineMenu onClick={() => setIsOpen(true)} />
            </motion.div>
          )}
        </span>
      </HamburgerBtn>
      {isOpen && mobileMenu()}
    </StyledNavbar>
  )
}

export default Navbar
