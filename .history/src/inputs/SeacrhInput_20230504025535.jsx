import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const StyledSearchInput = styled.div`
  display: inline-block;
  position: relative;
  > input {
    max-width: 25vw;
    min-width: 30vw;
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-size: var(--font-md);
    border-radius: var(--border-size4);
    color: ${(props) => props.theme.textColor};
    padding: var(--font-xxxs) var(--font-xxs);
    border: 1px solid ${(props) => props.theme.textMuted};
    box-shadow: var(--box-shadow-small);
    padding-right: 30px;
    @media (max-width: 550px) {
      min-width: 80vw;
    }
    :focus {
      background-image: url(http://platesrecords.co.uk/image/arrow-down.gif);
      border: 1px solid ${(props) => props.theme.primaryColor};
      outline: none;
    }
  }
  > span {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(-100%, -25%);
    color: ${(props) => props.theme.textMuted};
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.primaryColor};
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
