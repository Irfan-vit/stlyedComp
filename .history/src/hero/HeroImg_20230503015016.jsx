import styled from 'styled-components'
import './HeroImg.css'
import { Button } from '../buttons/Primary'

const HeroImg = styled(Hero)``

const Hero = ({ className }) => (
  <div className={className}>
    <div className="hero-text">
      <h1>Stylish Art Online</h1>
      <Button varient="outline">Shop Now</Button>
    </div>
  </div>
)

export default Hero
