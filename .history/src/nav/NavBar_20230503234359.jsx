import styled from 'styled-components'
import SearchInput from '../inputs/SeacrhInput'
import artist from '../assets/artist.png'

const NavWrapper = styled.header`
  background-color: antiquewhite;
`

const Nav = styled.nav`
  padding: 2rem;
  display: flex;
  flex-flow: column wrap;
  @media (min-width: 550px) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
  > div > ul {
    dis
  }
`

const NavBar = () => {
  return (
    <NavWrapper>
      <Nav>
        <div>
          <h1>art</h1>
        </div>
        <div>
          <form action="">
            <label
              htmlFor="categories"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <select name="categories" id="categories">
                <option value="select">categories</option>
                <option value="cat1">cat1</option>
                <option value="cat2">cat2</option>
                <option value="cat3">cat3</option>
                <option value="cat4">cat4</option>
              </select>
            </label>
          </form>
        </div>
        <div>
          <SearchInput />
        </div>
        <div>
          <ul>
            <li>Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>
      </Nav>
    </NavWrapper>
  )
}

export default NavBar
