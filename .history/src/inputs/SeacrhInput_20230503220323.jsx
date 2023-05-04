import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const StyledSearchInput = styled.input`
  border: none;
  border-radius: 4px;
  outline: none;
  background-image: url(http://platesrecords.co.uk/image/arrow-down.gif);
  :focus {
    /* background-color: blueviolet; */
    background-image: url(http://platesrecords.co.uk/image/arrow-down.gif);
    border-bottom: 2px solid ${(props) => props.theme.primaryColor};
    outline: none;
  }
`

const SearchInput = () => {
  return (
    <div>
      <StyledSearchInput type="text" />
      <FiSearch/></FiSearch>
    </div>
  )
}
export default SearchInput
