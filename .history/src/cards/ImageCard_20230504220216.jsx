import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  gap: 1%;
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 2%;
  }
`
const Card = styled.figure`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  @media (min-width: 550px) {
    flex-basis: 18%;
  }
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
    <Wrapper>
      {/* <h2>Featured</h2> */}
      <ul>
        <li>
          <Card>
            <img src="https://assets.codepen.io/296057/fem-fb-one.png" alt="" />
            <figcaption>
              <a href="#">Category1</a>
            </figcaption>
          </Card>
        </li>
        <li>
          <Card>
            <img src="https://assets.codepen.io/296057/fem-fb-one.png" alt="" />
            <figcaption>
              <h2>Bubbles</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
          </Card>
        </li>
        <li>
          <Card>
            <img src="https://assets.codepen.io/296057/fem-fb-one.png" alt="" />
            <figcaption>
              <h2>Bubbles</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
          </Card>
        </li>
        <li>
          <Card>
            <img src="https://assets.codepen.io/296057/fem-fb-one.png" alt="" />
            <figcaption>
              <h2>Bubbles</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </figcaption>
          </Card>
        </li>
      </ul>
    </Wrapper>
  )
}

export default ImageCard
