import styled from 'styled-components'

import NavBar from '../../nav/NavBar'
import SideNav from '../../sidenav/SideNav'
import FlexCards from '../../wrappers/FlexCards'

const StyledProductPage = styled.div``

const StyledNav = styled.div``

const SideNav = styled.SideNav``

const Product = () => {
  return (
    <StyledProductPage>
      <NavBar>
        <NavBar />
      </NavBar>
      <div>
        <div>
          <SideNav />
        </div>
        <div>
          <FlexCards />
        </div>
      </div>
    </StyledProductPage>
  )
}

export default Product
