import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { Button } from '../buttons/Primary'

const StyledSearchInput = styled.div`
  display: inline-block;
  position: relative;
  > input {
    max-width: 10vw;
    display: inline-block;
    outline: none;
    border-radius: var(--border-size4);
    cursor: pointer;
    font-size: var(--font-md);
    margin: var(--spacing-unit);
    padding: var(--font-xxxs) var(--font-xxs);
    border: 1px solid ${(props) => props.theme.textMuted};
    border-radius: 4px;
    box-shadow: var(--box-shadow-small);
    :focus {
      /* background-color: blueviolet; */
      background-image: url(http://platesrecords.co.uk/image/arrow-down.gif);
      border: 1px solid ${(props) => props.theme.primaryColor};
      outline: none;
    }
    > span {
    }
  }
`

const SearchInput = () => {
  return (
    <StyledSearchInput>
      <input type="text" />
      <span>
        <FiSearch />
      </span>
    </StyledSearchInput>
  )
}
export default SearchInput
