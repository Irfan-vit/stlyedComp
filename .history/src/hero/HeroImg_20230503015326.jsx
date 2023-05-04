import styled from 'styled-components'
import './HeroImg.css'
import { Button } from '../buttons/Primary'

const Hero = ({ className }) => (
  <div className={className}>
    <div className="hero-text">
      <h1>Stylish Art Online</h1>
      <Button varient="outline">Shop Now</Button>
    </div>
  </div>
)

const HeroImg = styled(Hero)`
>div 
`

export default Hero
