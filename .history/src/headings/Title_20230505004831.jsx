import styled from 'styled-components'

const H1 = styled.h1`
  color: #474a56;
  font-size: var(--font-xxl);
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  margin: auto;
  /* text-decoration: wavy; */
  text-decoration-line: underline overline;
  text-decoration-color: #474a56;
  text-decoration-style: wavy
  /* :before {
    background-color: ${(props) => props.theme.footer};
    content: '';
    display: inline-block;
    text-align: center;
    height: 3px;
    width: 3rem;
    margin-bottom: 30px;
    transform: translate(50%, -50%);
  }
  :after {
    background-color: ${(props) => props.theme.footer};
    content: '';
    display: inline-block;
    text-align: center;
    height: 3px;
    width: 3rem;
    margin-top: 30px;
    transform: translate(-50%, 200%);
  } */
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
