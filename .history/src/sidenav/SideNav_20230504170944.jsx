import { AiOutlineMenu, AiOutlineClose, AiOutlineClear } from 'react-icons/ai'
import { MdOutlineDownloadDone } from 'react-icons/md'
import styled from 'styled-components'

const StyledAside = styled.aside`
  display: flex;
  flex-flow: column wrap;
`

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
`

const SideNav = () => {
  return (
    <StyledAside>
      <a href="">
        <AiOutlineMenu />
      </a>
      <nav>
        <div>
          <a href="">
            <AiOutlineClose />
          </a>
          <a href="">
            <AiOutlineClear />
          </a>
          <a href="">
            <MdOutlineDownloadDone />
          </a>
        </div>
        {/* <div> */}
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
        {/* </div> */}
        {/* <div> */}
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
        {/* </div> */}
        {/* <div> */}
        <StyledForm action="">
          <label htmlFor="">
            <input className="form-checkbox-field" type="checkbox" />4 star and
            above
          </label>
          <label htmlFor="">
            <input className="form-checkbox-field" type="checkbox" />3 star and
            above
          </label>
          <label htmlFor="">
            <input className="form-checkbox-field" type="checkbox" />2 star and
            above
          </label>
          <label htmlFor="">
            <input className="form-checkbox-field" type="checkbox" />1 star and
            above
          </label>
        </StyledForm>
        {/* </div> */}
      </nav>
      <a href=""></a>
    </StyledAside>
  )
}
export default SideNav
