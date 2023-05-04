import GenericCard from '../cards/GenericCard'

import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.footer};
  max-width: 1200px;
  margin: 0 auto;
`

const Cards = styled.div`
  box-shadow:  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%,  
              100%, 0.075),
              /* shadow ring 👇 */
              0 0 0 1px hsla(0, 0%, 0%, 0.05),
              /* multiple soft shadows 👇 */
              0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
              0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
              0 3.5px 6px hsla(0, 0%, 0%, 0.09);;
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
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
