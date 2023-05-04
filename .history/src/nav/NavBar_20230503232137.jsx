import styled from 'styled-components'
import SearchInput from '../inputs/SeacrhInput'
import flower from '../assets/flower.svg'

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={flower} alt="" height={} />
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
      </nav>
    </header>
  )
}

export default NavBar
