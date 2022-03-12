import { ThemeProvider } from 'styled-components'
import GlobalStyles from './globalStyles'
import { lightTheme, darkTheme } from './components/Themes'
import Main from './components/Main'
import Navbar from './components/Nav/Navbar'
import NavProvider from './context/NavContext'
import { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState('lightTheme')

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : darkTheme}>
        <NavProvider>
          <Navbar theme={theme} setTheme={setTheme} />
          <Main />
        </NavProvider>
      </ThemeProvider>
    </>
  )
}

export default App
