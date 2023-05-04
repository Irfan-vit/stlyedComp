import './App.css'
import { ThemeProvider } from 'styled-components'
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
import GlobalStyles from './utils/Global'

function App() {
  // const [useDarkTheme, setUseDarkTheme] = useState(false)
  return (
    // <ThemeProvider theme={theme}>
    <ThemeProvider theme={darkTheme}>
      {/* <Button onClick={() => setUseDarkTheme(true)}>Dark</Button>
      <Button onClick={() => setUseDarkTheme(false)}>Light</Button> */}
      <div
        style={{
          background: defaultTheme.primaryBackground
            ? defaultTheme.primaryBackground
            : darkTheme.primaryBackground,
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
      <GlobalStyles />
    </ThemeProvider>
    // </ThemeProvider>
  )
}

export default App
