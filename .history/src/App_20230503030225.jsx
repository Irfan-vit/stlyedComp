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

const theme = {
  bg: '#140068',
  fg: '#F7F2FD',
}
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
})

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.fg};
  }
`
function App() {
  const useDar
  return (
    // <ThemeProvider theme={theme}>
    // <GlobalStyles>
    <>
      <Hero />
      <FlexCards />
      <Button>Buy now</Button>
      <Button varient="outline">Add To Cart</Button>
      <ErrorButton>error</ErrorButton>
      <ErrorButton varient="outline">error</ErrorButton>
      <Button varient="outline" as="a" href="#">
        Link with Button styles
      </Button>
    </>
    // </GlobalStyles>
    // </ThemeProvider>
  )
}

export default App
