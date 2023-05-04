import './App.css'
import { Button, ErrorButton } from './buttons/Primary'
import Theme from './buttons/Theme'

function App() {
  return (
    <>
      <h1>hello</h1>
      <Button>Buy now</Button>
      <Button varient="outline">Add To Cart</Button>
      <ErrorButton>error</ErrorButton>
      <ErrorButton varient="outline">error</ErrorButton>
      <Button as="a" href="#">
        Link with Button styles
      </Button>
      <Theme></Theme>
    </>
  )
}

export default App
