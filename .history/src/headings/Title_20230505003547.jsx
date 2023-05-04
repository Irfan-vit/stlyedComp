import styled from 'styled-components'

const H1 = styled.h1`
  color: #474a56;
  font-size: var(--font-xxl);
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  margin: auto;
  :before {
    background-color: ${(props) => props.theme.footer};
    content: '';
    display: inline-block;
    text-align: center;
    height: 3px;
    width: 75px;
    position: absolute;
    top
  }
  :after {
    background-color: ${(props) => props.theme.footer};
    content: '';
    display: inline-block;
    text-align: center;
    height: 3px;
    width: 75px;
  }
`

const Div = styled.div`
  position: relative;
  margin: 6rem;
  /* background: #f8f8f8;
  width: 90%;
  max-width: 500px;
  padding: 2em;
  margin: 1.5em auto;
  border: 3px solid rgba(0, 0, 0, 0.08); */
`

const Title = ({ heading }) => {
  return (
    <Div>
      <H1>{heading}</H1>
    </Div>
  )
}

export default Title
