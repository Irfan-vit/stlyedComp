import styled from 'styled-components'

import NavBar from '../../nav/NavBar'
import SideNav from '../../sidenav/SideNav'
import FlexCards from '../../wrappers/FlexCards'

const ProductPage = styled.div``

const Product = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <div>
          <SideNav />
        </div>
        <div>
          <FlexCards />
        </div>
      </div>
    </div>
  )
}

export default Product
