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

const HeroImg = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://plus.unsplash.com/premium_photo-1674939148262-54e2707ec176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  min-height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
  > div > h1
`

export default Hero