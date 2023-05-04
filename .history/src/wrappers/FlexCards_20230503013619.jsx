import GenericCard from '../cards/GenericCard'
import './FlexCards.css'

import styled from 'styled-components'
import '../utils/colors.css'
import '../utils/typography.css'

const Wrapper = styled.div

const FlexCards = () => {
  return (
    <div className="row">
      <GenericCard />
      <GenericCard />
      <GenericCard />
      <GenericCard />
    </div>
  )
}

export default FlexCards
