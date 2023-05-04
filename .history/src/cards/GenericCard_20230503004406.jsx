import './GenericCard.css'

import styled from 'styled-components'
import '../utils/colors.css'
import '../utils/typography.css'

const Figure = styled.figure`
  margin: 0;
  padding: 0;

  @media (min-width: 550px) {
    figure {
      flex-basis: 49%;
    }
  }
  @media (min-width: 900px) {
    figure {
      flex-basis: 24%;
    }
  }
`
const FigureCAption = styled.fig
const GenericCard = () => {
  return (
    <figure>
      <div className="one"></div>
      <figcaption>
        <h2>Abstract 1</h2>
        <p>
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </p>
      </figcaption>
    </figure>
  )
}

export default GenericCard
