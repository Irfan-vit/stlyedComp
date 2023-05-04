import './App.css'
import { ThemeProvider } from 'styled-components'
import { Button, ErrorButton } from './buttons/Primary'
import './utils/colors.css'
import './utils/typography.css'
import Main from './Theme/Theme'
import { useTheme } from 'styled-components'

import FlexCards from './wrappers/FlexCards'
import Hero from './hero/HeroImg'
import { defaultTheme, darkTheme } from './utils/theme'
import GlobalStyles from './utils/Global'

function App() {
  // const [useDarkTheme, setUseDarkTheme] = useState(false)
  return (
    <ThemeProvider theme={darkTheme}>
        <Hero />
        <FlexCards />
        <Button>Buy now</Button>
        <Button varient="outline">Add To Cart</Button>
        <ErrorButton>error</ErrorButton>
        <ErrorButton varient="outline">error</ErrorButton>
        <Button varient="outline" as="a" href="#">
          Link with Button styles
        </Button>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
