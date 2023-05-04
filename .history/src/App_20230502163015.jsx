import './App.css'
import { ThemeProvider } from 'styled-components'
import { Button, ErrorButton } from './buttons/Primary'
import Theme from './buttons/Theme'
import './utils/colors.css'
import './utils/typography.css'
import use

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
