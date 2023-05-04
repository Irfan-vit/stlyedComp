import styled from 'styled-components'

import NavBar from '../../nav/NavBar'
import SideNav from '../../sidenav/SideNav'
import FlexCards from '../../wrappers/FlexCards'
import Footer from '../../Footer/Footer'

const StyledProductPage = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  gap: 2%;
`

const StyledNavBar = styled.div``

const StyledSideNav = styled.div``

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
