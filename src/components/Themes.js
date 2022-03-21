const themeTransition = {
  transition: 'background-color 0.5s linear',
}
const landingPage = {
  light: {
    text: '#FFFFFF',
    backgroundImage: 'url("images/landingInvert.webp")',
    landingHero: 'url("images/landingHeroInvert.png")',
  },
  dark: {
    text: '#262c2e',
    backgroundImage: 'url("images/landing.webp")',
    landingHero: 'url("images/landingHero.svg")',
    
  },
}

export const lightTheme = {
  body: '#E2E2E2',
  text: '#363537',
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: '252, 2546,244',
  textRgba: 'rgba(54, 53, 55, 0.7)',
  color: 'orange',
  themeTransition: themeTransition,
  navbar: {
    body: '#0a192f',
    // text: '#E2E2E2',
    text: '#FFF',
    borderBottom: '1px solid #FFF',
  },
  landingPage: landingPage.light,
}

export const darkTheme = {
  body: '#3E065F',
  text: '#FCF6F4',
  fontFamily: "'Source Sans Pro', sans-serif",
  textRgba: '252, 2546,244',
  bodyRgba: 'rgba(54, 53, 55, 0.7)',
  themeTransition: themeTransition,
  navbar: {
    body: '#FFF',
    text: '#0e1111',
    borderBottom: '1px solid #000',
  },
  landingPage: landingPage.dark,
}
