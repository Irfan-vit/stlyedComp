import GenericCard from '../cards/GenericCard'

import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: pink;
  max-width: 1200px;
  margin: 0 auto;
`

const Cards = styled.div`
  box-shadow: var(--box-shadow);
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-eve;
    align-content: space-evenly;
    align-items: center;
    gap: 1%;
  }
`

const FlexCards = () => {
  return (
    <Wrapper>
      <Cards>
        <GenericCard />
        <GenericCard />
        <GenericCard />
        <GenericCard />
      </Cards>
    </Wrapper>
  )
}

export default FlexCards
