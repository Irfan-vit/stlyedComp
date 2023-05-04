import { AiOutlineMenu, AiOutlineClose, AiOutlineClear } from 'react-icons/ai'
import { MdOutlineDownloadDone } from 'react-icons/md'

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
          <form action="">
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
          </form>
        {/* </div> */}
        <div>
          <form action="">
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
          </form>
        </div>
        <div>
          <form action="">
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
          </form>
        </div>
      </nav>
      <a href=""></a>
    </aside>
  )
}
export default SideNav
