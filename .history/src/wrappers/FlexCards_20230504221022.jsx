import GenericCard from '../cards/GenericCard'

import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1200px;
  background-color: pink;
  box-shadow: var(--box-shadow);
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 1%;
  }
`

const FlexCards = () => {
  return (
    <>
      <Wrapper>
        <GenericCard />
        <GenericCard />
        <GenericCard />
        <GenericCard />
      </Wrapper>
    </>
  )
}

export default FlexCards
