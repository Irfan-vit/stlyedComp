import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { Button } from '../buttons/Primary'

const StyledSearchInput = styled.div`
  display: inline-block;
  > input {
    display: inline-block;
    outline: none;
    background: transparent;
    border-radius: var(--border-size4);
    cursor: pointer;
    font-size: var(--font-md);
    margin: var(--spacing-unit);
    padding: var(--font-xxxs) var(--font-xxs);
    border-bottom: 1px solid ${(props) => props.theme.textMuted};
    border-radius: 4px;
    box --box-shadow-x-small
    :focus {
      /* background-color: blueviolet; */
      background-image: url(http://platesrecords.co.uk/image/arrow-down.gif);
      border-bottom: 1px solid ${(props) => props.theme.primaryColor};
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
