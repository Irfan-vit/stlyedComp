import styled from 'styled-components'

import NavBar from '../../nav/NavBar'
import SideNav from '../../sidenav/SideNav'
import FlexCards from '../../wrappers/FlexCards'
import Footer from '../../Footer/Footer'

const StyledProductPage = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`

const StyledNavBar = styled.div``

const StyledSideNav = styled.div`
  max-width: 20vw;
  max-height: 10vh;
`

const StyledFlexCards = styled.div``

const StyledSideAndCard = styled.div``

const StyledFooter = styled.div``

const Product = () => {
  return (
    <StyledProductPage>
      <StyledNavBar>
        <NavBar />
      </StyledNavBar>
      <StyledSideAndCard>
        <StyledSideNav>
          <SideNav />
        </StyledSideNav>
        <StyledFlexCards>
          <FlexCards />
        </StyledFlexCards>
      </StyledSideAndCard>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </StyledProductPage>
  )
}

export default Product
