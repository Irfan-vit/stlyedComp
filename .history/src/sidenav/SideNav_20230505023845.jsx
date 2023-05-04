import { AiOutlineMenu, AiOutlineClose, AiOutlineClear } from 'react-icons/ai'
import { MdOutlineDownloadDone } from 'react-icons/md'
import styled from 'styled-components'

const StyledAside = styled.aside.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  flex-flow: column wrap;
  > .main-menu:target + .backdrop {
    background-color: pink;
    position: fixed;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
    background-color: #0000008d;
    cursor: default;
  }
  @media (min-width: 800px) {
    > a {
      display: none;
    }
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  margin-top: 20px;
`

const StyledNav = styled.nav`
  @media (min-width: 800px) {
    display: inline-block;
    left: 0;
    position: static;
  }
  position: static;
  /* display: none; */
  /* left: -200px; */
  top: 0;
  height: 100%;
  overflow-x: visible;
  overflow-y: auto;
  transition: left 0.3s ease;
  z-index: 999;
  > div {
    width: 200px;
    margin: 0;
    :last-child {
      min-height: 90%;
      display: flex;
      flex-flow: column wrap;
      background-color: green;
    }
    :first-child {
      min-height: 10%;
      background-color: yellow;
    }
  }
  :target {
    display: block;
    left: 0;
    outline: none;
    :last-child {
      min-height: 90%;
      display: flex;
      flex-flow: column wrap;
    }
  }
`

const SideNav = () => {
  return (
    <StyledAside>
      <a href="#main-menu">
        <AiOutlineMenu />
      </a>
      <StyledNav id="main-menu" className="main-menu">
        <div>
          <a href="#">
            <AiOutlineClose />
          </a>
          <a href="">
            <AiOutlineClear />
          </a>
          <a href="">
            <MdOutlineDownloadDone />
          </a>
        </div>
        <div>
          <StyledForm action="">
            <label htmlFor="sortPrice">
              <input
                className="form-checkbox-field"
                type="radio"
                name="sort"
                value="HIGH_TO_LOW_PRICE"
              />
              High to Low
            </label>
            <label htmlFor="sortPrice">
              <input
                className="form-checkbox-field"
                type="radio"
                name="sort"
                value="LOW_TO_HIGH_PRICE"
              />
              Low to High
            </label>
          </StyledForm>
          <StyledForm action="">
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              Category1
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              Category1
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              Category1
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />
              Category1
            </label>
          </StyledForm>
          <StyledForm action="">
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />4 star
              and above
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />3 star
              and above
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />2 star
              and above
            </label>
            <label htmlFor="">
              <input className="form-checkbox-field" type="checkbox" />1 star
              and above
            </label>
          </StyledForm>
        </div>
      </StyledNav>
      <a href="#" className="backdrop"></a>
    </StyledAside>
  )
}
export default SideNav
