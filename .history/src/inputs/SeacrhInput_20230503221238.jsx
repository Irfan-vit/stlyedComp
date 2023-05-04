import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { Button } from '../buttons/Primary'

const StyledSearchInput = styled.div`
  display: inline-block;
  > input {
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.textMuted};
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

      <Button varient="outline">
        <FiSearch />
      </Button>
    </StyledSearchInput>
  )
}
export default SearchInput
