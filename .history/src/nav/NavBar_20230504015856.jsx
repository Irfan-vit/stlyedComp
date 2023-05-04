import styled from 'styled-components'
import SearchInput from '../inputs/SeacrhInput'
import artist from '../assets/artist.svg'
import { BsMoon, BsCart3, BsBagHeart } from 'react-icons/bs'

const NavWrapper = styled.header`
  background-color: antiquewhite;
`

const Nav = styled.nav`
  padding: 2rem;
  display: flex;
  flex-flow: column wrap;
  gap: 1%;
  @media (min-width: 550px) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
  > div > ul {
    text-align: center;
    min-width: 25vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 1%;
    list-style-type: none;
  }
  div > ul > li {
    flex-basis: 30%;
  }
`

const NavBar = () => {
  return (
    <NavWrapper>
      <Nav>
        <div>
          <h1
            style={{
              backgroundImage: `url(${artist})`,
              display: 'inline-block',
              overflow: 'hidden',
              textIndent: '-9999px',
              filter: 'brightness(150%)',
              width: '80px',
              height: '800x',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            Hi
          </h1>
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
            <li>
              <BsCart3 />
            </li>
            <li>
              <BsBagHeart />
            </li>
            <li>
              <BsMoon />
            </li>
          </ul>
        </div>
      </Nav>
    </NavWrapper>
  )
}

export default NavBar
