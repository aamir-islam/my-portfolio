import { ThemeProvider } from 'styled-components/macro'
import GlobalStyles from './globalStyles'
import { lightTheme, darkTheme } from './components/Themes'
import Main from './components/Main'
import Navbar from './components/Nav/Navbar'
import NavProvider from './context/NavContext'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('lightTheme')
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : darkTheme}>
        <NavProvider>
          <Navbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            theme={theme}
            setTheme={setTheme}
          />
          <Main isOpen={isOpen} />
        </NavProvider>
      </ThemeProvider>
    </>
  )
}

export default App
