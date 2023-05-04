import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const SideNav = () => {
  return (
    <aside>
      <a href="">
        <AiOutlineMenu />
      </a>
      <nav>
        <a href="">
          <AiOutlineClose />
        </a>
        <div>
          <form action="">
            <label htmlFor="sortPrice">
              <input
                className="form-checkbox-field"
                type="radio"
                name="sort"
                value="HIGH_TO_LOW_PRICE"
              />
            </label>
            <label htmlFor="sortPrice">
              <input
                className="form-checkbox-field"
                type="radio"
                name="sort"
                value="LOW_TO_HIGH_PRICE"
              />
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
