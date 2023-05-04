import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const StyledSearchInput = styled.div`
  display: inline;
  > input {
    outline: none;
    border: 2px soid ${(props) => props.theme.textMuted};
    border-radius: 4px;
    background-image: url(http://platesrecords.co.uk/image/arrow-down.gif);
    :focus {
      /* background-color: blueviolet; */
      background-image: url(http://platesrecords.co.uk/image/arrow-down.gif);
      border-bottom: 2px solid ${(props) => props.theme.primaryColor};
      outline: none;
    }
  }
`

const SearchInput = () => {
  return (
    <StyledSearchInput>
      <input type="text" />
      <FiSearch />
    </StyledSearchInput>
  )
}
export default SearchInput
