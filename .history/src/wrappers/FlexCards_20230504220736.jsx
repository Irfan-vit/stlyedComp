import GenericCard from '../cards/GenericCard'

import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 1200px;
  background-color: pink;
  box-shadow: var(--box-shadow);
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-evenly;
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
