import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  @media (min-width: 600px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    gap: 1%;
  }
`
const Card = styled.figure`
  margin: 0;
  padding: 0;
  > figcaption {
    background-color: #001219;
    color: white;
    padding: 1rem;
  }
  > figcaption * {
    margin: 0.5rem;
  }
  > img {
    width: 100%;
  }
  @media (min-width: 600px) {
    flex-basis: 48%;
  }
`

const ImageCard = () => {
  return (
    <div>
      <figure>
        <img src="https://assets.codepen.io/296057/fem-fb-one.png" alt="" />
        <figcaption></figcaption>
      </figure>
    </div>
  )
}

export default ImageCard
