import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 160px;
  text-align: center;
  margin: auto;
  white-space: nowrap;
  padding-bottom: 13px;
  :before
`

const Title = ({ heading }) => {
  return (
    <div>
      <H1>{heading}</H1>
    </div>
  )
}
