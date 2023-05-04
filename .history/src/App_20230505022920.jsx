import './App.css'
import { ThemeProvider } from 'styled-components'
import { Button, ErrorButton } from './buttons/Primary'
import './utils/colors.css'
import './utils/typography.css'

import FlexCards from './wrappers/FlexCards'
import Hero from './hero/HeroImg'
import ImageCard from './cards/ImageCard'
import { defaultTheme, darkTheme } from './utils/theme'
import GlobalStyles from './utils/Global'
import Footer from './Footer/Footer'
import NavBar from './nav/NavBar'
import SideNav from './sidenav/SideNav'

import SearchInput from './inputs/SeacrhInput'
import Mission from './mission/Mission'

import Product from './pages/product/Product'

function App() {
  // const [useDarkTheme, setUseDarkTheme] = useState(false)
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <NavBar />
      <SideNav />
      <Mission />
      <Hero />
      <FlexCards />
      <ImageCard />
      <Button>Buy now</Button>
      <Button varient="outline">Add To Cart</Button>
      <ErrorButton>error</ErrorButton>
      <ErrorButton varient="outline">error</ErrorButton>
      <SearchInput />
      <Footer /> */}
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
