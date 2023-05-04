import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 6rem;
`

const H1 = styled.h1`
  color: #474a56;
  font-size: var(--font-lg);
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  text-decoration-line: underline;
  text-decoration-color: #474a56;
  text-decoration-style: wavy;
  text-emphasis: filled double-circle #ffb703;
  @media (min-width: 550px) {
    font-size: 3.5em;
  }

  @media (min-width: 900px) {
    font-size: var(--font-xx);
  }
`

const Title = ({ heading }) => {
  return (
    <Div>
      <H1>{heading}</H1>
    </Div>
  )
}

export default Title
