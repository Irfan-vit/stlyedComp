import styled from 'styled-components'

const StyledSearchInput = styled.input`
  border: none;
  border-radius: 4px;
  :focus {
    background-color: blueviolet;
    border: 1px solid green;
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
