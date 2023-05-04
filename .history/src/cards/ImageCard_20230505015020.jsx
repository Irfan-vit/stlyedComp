import styled from 'styled-components'
import Title from '../headings/Title'

import './image.css'

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0;
`
const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  > li {
    @media (min-width: 550px) {
      flex-basis: 49.5;
    }
    @media (min-width: 768px) {
      flex-basis: 32.5;
    }
  }
`

const Card = styled.figure`
  margin: 0 0 0.5rem 0;
  padding: 0;
  max-height: 400px;
  overflow: hidden;
  position: relative;
  @media (min-width: 550px) {
  }
  > figcaption {
    background-color: rgba(255, 255, 255, 0.8);
    font-size: 1.875rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  > figcaption > a {
    display: block;
    padding: 1rem;
    text-decoration: none;
  }
  > img {
    margin-bottom: -4px;
    width: 100%;
    object-fit: cover;
    object-position: 0 -150px;
    @media (min-width: 550px) {
      object-position: 0;
    }
  }
`

const ImageCard = () => {
  return (
    <>
      <Title heading="Categories" />
      <section className="row">
        <figure>
          <img
            src="https://assets.codepen.io/296057/fem-fb-one.png"
            alt="Image of bubbles through a microscope."
          />
          <figcaption>
            <h2>Bubbles</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </figcaption>
        </figure>

        <figure>
          <img
            src="https://assets.codepen.io/296057/fem-fb-two.png"
            alt="Grid of grey squares with green wells."
          />

          <figcaption>
            <h2>Green or Grey</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/296057/fem-fb-three.png"
            alt="Wavy lines in summer-y colors like orange, light purple, and yellow."
          />

          <figcaption>
            <h2>Summer Waves</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/296057/fem-fb-four.png"
            alt="Fibronacci sequence of spirals."
          />

          <figcaption>
            <h2>Spiraling Away</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </figcaption>
        </figure>
      </section>
    </>
  )
}

export default ImageCard
