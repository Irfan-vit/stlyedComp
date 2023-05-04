import './App.css'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Button, ErrorButton } from './buttons/Primary'
import Theme from './Theme/Theme'
import './utils/colors.css'
import './utils/typography.css'
import { useState } from 'react'
import Main from './Theme/Theme'
import { useTheme } from 'styled-components'

import FlexCards from './wrappers/FlexCards'
import Hero from './hero/HeroImg'
import { defaultTheme, darkTheme } from './utils/theme'

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.fg};
  }
`
function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  return (
    // <ThemeProvider theme={theme}>
    // <GlobalStyles>
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <Button onClick={useDarkTheme ? setUseDarkTheme(true) : setTheme(false)}>toggle</Button>
      <div
        style={{
          background: theme ? darkTheme : defaultTheme,
          height: '100vh',
          width: '100vw',
        }}
      >
        <Hero />
        <FlexCards />
        <Button>Buy now</Button>
        <Button varient="outline">Add To Cart</Button>
        <ErrorButton>error</ErrorButton>
        <ErrorButton varient="outline">error</ErrorButton>
        <Button varient="outline" as="a" href="#">
          Link with Button styles
        </Button>
      </div>
    </ThemeProvider>
    // </GlobalStyles>
    // </ThemeProvider>
  )
}

export default App
