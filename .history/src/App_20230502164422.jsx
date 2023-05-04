import './App.css'
import { ThemeProvider } from 'styled-components'
import { Button, ErrorButton } from './buttons/Primary'
import Theme from './Theme/Theme'
import './utils/colors.css'
import './utils/typography.css'
import { useState } from 'react'
import Main from './Theme/Theme'
import { useTheme } from 'styled-components'

const theme = {
  bg: '#140068',
  fg: '#F7F2FD',
}
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
})

function App() {
  return (
        <h1>hello</h1>
        <Button>Buy now</Button>
        <Button varient="outline">Add To Cart</Button>
        <ErrorButton>error</ErrorButton>
        <ErrorButton varient="outline">error</ErrorButton>
        <Button varient="outline" as="a" href="#">
          Link with Button styles
        </Button>
        <Theme></Theme>
  )
}

export default App
