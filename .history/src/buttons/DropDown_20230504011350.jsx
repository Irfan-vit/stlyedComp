import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  display: inline-block;
  > button {
    background-color: #04aa6d;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
  }
  > div 
`

const DropDown = () => {
  return (
    <section className="dropdown">
      <button className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </section>
  )
}
