import { AiOutlineMenu, AiOutlineClose, AiOutlineClear } from 'react-icons/ai'
import { MdOutlineDownloadDone } from 'react-icons/md'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
`

const SideNav = () => {
  return (
    <aside>
      <a href="">
        <AiOutlineMenu />
      </a>
      <a href="">
        <AiOutlineClear />
      </a>
      <a href="">
        <MdOutlineDownloadDone />
      </a>
      <nav>
        <a href="">
          <AiOutlineClose />
        </a>
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
    </aside>
  )
}
export default SideNav
