import './HeroImg.css'
import { Button } from '../buttons/Primary'
const HeroImg = () => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Stylish</h1>
        <Button varient="outline">Add To Cart</Button>
      </div>
    </div>
  )
}

export default HeroImg
