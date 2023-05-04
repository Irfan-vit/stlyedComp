import styled from 'styled-components'
import SearchInput from '../inputs/SeacrhInput'
import artist from '../assets/artist.png'
import { BsMoon, BsCart3, BsBagHeart } from 'react-icons/bs'

// const NavWrapper = styled.header`
//   background-color: antiquewhite;
// `

// const Nav = styled.nav`
//   padding: 2rem;
//   display: flex;
//   flex-flow: column wrap;
//   gap: 1%;
//   @media (min-width: 550px) {
//     flex-flow: row wrap;
//     justify-content: space-between;
//   }
//   > div > ul {
//     text-align: center;
//     min-width: 25vw;
//     display: flex;
//     flex-flow: row wrap;
//     justify-content: space-between;
//     gap: 1%;
//     list-style-type: none;
//   }
//   div > ul > li {
//     flex-basis: 30%;
//   }
// `

const NavWrapper = 

const NavBar = () => {
  return (
    // <NavWrapper>
    //   <Nav>
    //     <div>
    //       <h1>art</h1>
    //     </div>
    //     <div>
    //       <form action="">
    //         <label
    //           htmlFor="categories"
    //           onSubmit={(e) => {
    //             e.preventDefault()
    //           }}
    //         >
    //           <select name="categories" id="categories">
    //             <option value="select">categories</option>
    //             <option value="cat1">cat1</option>
    //             <option value="cat2">cat2</option>
    //             <option value="cat3">cat3</option>
    //             <option value="cat4">cat4</option>
    //           </select>
    //         </label>
    //       </form>
    //     </div>
    //     <div>
    //       <SearchInput />
    //     </div>
    //     <div>
    //       <ul>
    //         <li>
    //           <BsCart3 />
    //         </li>
    //         <li>
    //           <BsBagHeart />
    //         </li>
    //         <li>
    //           <BsMoon />
    //         </li>
    //       </ul>
    //     </div>
    //   </Nav>
    // </NavWrapper>
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <div className="dropdown">
        <button className="dropbtn">
          Dropdown
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
