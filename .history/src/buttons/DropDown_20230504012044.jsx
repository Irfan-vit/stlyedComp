import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  display: inline-block;
  :hover {
    display: block;
  }
  > div {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    :hover {
      display: block;
    }
  }
  > div > a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    :hover {
      background-color: #ddd;
    }
  }
`
const DropButton = styled.button`
  background-color: #04aa6d;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
`
const DropContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`

const DropDown = () => {
  return (
    <Wrapper className="dropdown">
      <DropButton className="dropbtn">Dropdown</DropButton>
      <DropContent className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </Wrapper>
  )
}

export default DropDown
