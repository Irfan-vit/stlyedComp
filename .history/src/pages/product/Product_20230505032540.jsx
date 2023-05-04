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

const StyledSideAndCard = styled.div`
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  flex-flow: row nowrap;
  justify-content: space-between;
  /* gap: 2%; */
`

const StyledSideNav = styled.div`
  @media (min-width: 800px) {
    background: green;
    flex-basis: 14%;
  }
`

const StyledFlexCards = styled.div`
  margin: 0 auto;
  flex-basis: 85%;
  /* flex-grow: 1; */
  @media (max-width: 800px) {
    flex-basis: 100%;
    flex-grow: 1;
  }
`

const StyledFooter = styled.div``

const Product = () => {
  return (
    <StyledProductPage>
      {/* <StyledNavBar> */}
      <NavBar />
      {/* </StyledNavBar> */}
      <StyledSideAndCard>
        <StyledSideNav>
          <SideNav />
        </StyledSideNav>
        <StyledFlexCards>
          <FlexCards />
        </StyledFlexCards>
      </StyledSideAndCard>
      {/* <StyledFooter> */}
      <Footer />
      {/* </StyledFooter> */}
    </StyledProductPage>
  )
}

export default Product
