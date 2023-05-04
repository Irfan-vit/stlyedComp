import styled from 'styled-components'
export default function NewNav() {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <input type="text" placeholder="Search.." />
    </div>
  )
}
