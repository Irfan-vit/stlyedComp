import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  display: inline-block;
  > 
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
