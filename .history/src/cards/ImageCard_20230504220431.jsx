import styled from 'styled-components'

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  @media (min-width: 550px) {
  }
`
const Card = styled.figure`
  @media (min-width: 550px) {
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
    /* width: 100%; */
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
              <a href="#">Category</a>
            </figcaption>
          </Card>
        </li>
        <li>
          <Card>
            <img src="https://assets.codepen.io/296057/fem-fb-one.png" alt="" />
            <figcaption>
              <a href="#">Category</a>
            </figcaption>
          </Card>
        </li>
        <li>
          <Card>
            <img src="https://assets.codepen.io/296057/fem-fb-one.png" alt="" />
            <figcaption>
              <a href="#">Category</a>
            </figcaption>
          </Card>
        </li>
        <li>
          <Card>
            <img src="https://assets.codepen.io/296057/fem-fb-one.png" alt="" />
            <figcaption>
              <a href="#">Category</a>
            </figcaption>
          </Card>
        </li>
      </ul>
    </Wrapper>
  )
}

export default ImageCard
