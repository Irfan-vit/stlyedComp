import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const StyledSearchInput = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;
  /* margin-left: 25%; */
  @media (min-width: 550px) {
    margin: 0 auto;
  }
  > input {
    @media (min-width: 550px) {
      max-width: 25vw;
    }
    min-width: 20vw;
    max-width: 25vw;
    display: inline-block;
    outline: none;
    border-radius: var(--border-size4);
    cursor: pointer;
    color: ${(props) => props.theme.textColor};
    font-size: var(--font-md);
    padding: var(--font-xxxs) var(--font-xxs);
    border: 1px solid ${(props) => props.theme.textMuted};
    border-radius: 4rem;
    box-shadow: var(--box-shadow-small);
    padding-right: 30px;
    :focus {
      /* background-color: blueviolet; */
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