import styled from 'styled-components'

const StyledSearchInput = styled.input`
  border: none;
  border-radius: 4px;
  background-image: url(http://platesrecords.co.uk/image/arrow-down.gif);
  :focus {
    background-color: blueviolet;
    border: none;
  }
`

const SearchInput = () => {
  return (
    <>
      <StyledSearchInput type="text" />
    </>
  )
}
export default SearchInput
