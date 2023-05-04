import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  @media (min-width: 600px) {

    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    gap: 1%;
  figure {
    flex-basis: 48%;
  }
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
`

const ImageCard = () => {
  return (
    <div>
      <figure>
        <img src="" alt="" />
        <figcaption></figcaption>
      </figure>
    </div>
  )
}
