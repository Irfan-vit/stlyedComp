// import './GenericCard.css'

import styled from 'styled-components'
import '../utils/colors.css'
import '../utils/typography.css'

const FigureCard = styled.figure`
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
const FigureCaption = styled.figcaption`
  background-color: #001219;
  color: #ffff;
  padding: 1rem;
`
const FigureImage = styled.div`
  background-image: url('https://plus.unsplash.com/premium_photo-1674939148262-54e2707ec176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  min-height: 150px;
`

const GenericCard = () => {
  return (
    <FigureCard>
      <FigureImage className="one"></FigureImage>
      <FigureCaption>
        <h2>Abstract 1</h2>
        <p>
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </p>
      </FigureCaption>
    </FigureCard>
  )
}

export default GenericCard
