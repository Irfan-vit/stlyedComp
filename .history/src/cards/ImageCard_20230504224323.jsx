import styled from 'styled-components'

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  @media (min-width: 550px) {
    > ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }
    > li {
      flex-basis: 49.5;
    }
  }
  > li {
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
    margin: 0.5rem;
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
