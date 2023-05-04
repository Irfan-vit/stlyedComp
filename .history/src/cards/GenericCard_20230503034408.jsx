import styled from 'styled-components'
import '../utils/colors.css'
import '../utils/typography.css'

const FigureCard = styled.figure`
  margin: 0;
  padding: 0;

  @media (min-width: 550px) {
    flex-basis: 49%;
  }
  @media (min-width: 900px) {
    flex-basis: 24%;
  }
  > div {
    background-image: url('https://plus.unsplash.com/premium_photo-1674939148262-54e2707ec176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    min-height: 150px;
  }
  > figcaption {
    /* background-color: #001219; */
    background-color: #140f53;
    color: #ffff;
    padding: 1rem;
  }
`

const GenericCard = () => {
  return (
    <FigureCard>
      <div className="one"></div>
      <figcaption>
        <h2>Abstract 1</h2>
        <p>
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </p>
      </figcaption>
    </FigureCard>
  )
}
export default GenericCard
