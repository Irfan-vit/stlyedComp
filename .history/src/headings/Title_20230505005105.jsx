import styled from 'styled-components'

const H1 = styled.h1`
  color: #474a56;
  font-size: var(--font-xxl);
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  text-decoration-line: underline;
  text-decoration-color: #474a56;
  text-decoration-style: wavy;
  text-emphasis: filled double-circle #ffb703;
`



const Title = ({ heading }) => {
  return (
    <Div>
      <H1>{heading}</H1>
    </Div>
  )
}

export default Title
