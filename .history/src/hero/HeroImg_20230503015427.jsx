import styled from 'styled-components'
import './HeroImg.css'
import { Button } from '../buttons/Primary'

const Hero = () => (
  <div className="hero-image">
    <div className="hero-text">
      <h1>Stylish Art Online</h1>
      <Button varient="outline">Shop Now</Button>
    </div>
  </div>
)

const HeroImg = styled.`
  > div {
    min-height: 50vh;
    color: white;
    display: flex;
    flex-flow: column wrap;
    flex-basis: auto;
    align-items: center;
    align-content: space-evenly;
    justify-content: space-evenly;
    text-align: center;
  }
`

export default Hero
