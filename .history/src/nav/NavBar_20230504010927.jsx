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

const NavWrapper = styled.header`
  overflow: hidden;
  background-color: #333;
  padding: 2rem;
  > a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  > div {
    float: left;
    overflow: hidden;
  }
  > div > button {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }
  > a:hover,
  > div:hover,
  > div > button:hover {
    background-color: red;
  }
  div > div {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  div > div > a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  div > div > a:hover {
    background-color: #ddd;
  }
  > div:hover div > div:hover {
    display: block;
  }
  div > div:hover {
    display: block;
  }
`

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
    <NavWrapper className="navbar">
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
    </NavWrapper>
  )
}

export default NavBar
