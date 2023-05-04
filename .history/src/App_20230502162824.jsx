import './App.css'
import { ThemeProvider } from 'styled-components'
import { Button, ErrorButton } from './buttons/Primary'
import Theme from './buttons/Theme'
import './utils/colors.css'
import './utils/typography.css'

const theme = {
  dark: {
    bg: '#140068',
  },
  light: {
    primary: '#6C5CE7',
    text: '#FFFFFF',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <h1>hello</h1>
        <Button>Buy now</Button>
        <Button varient="outline">Add To Cart</Button>
        <ErrorButton>error</ErrorButton>
        <ErrorButton varient="outline">error</ErrorButton>
        <Button varient="outline" as="a" href="#">
          Link with Button styles
        </Button>
        <Theme></Theme>
      </>
    </ThemeProvider>
  )
}

export default App
