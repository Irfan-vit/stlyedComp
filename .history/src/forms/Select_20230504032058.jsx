import styled from 'styled-components'
const StyledSelect = styled.select`
  outline: none;
  border: none;
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: var(--font-md);
  border-radius: var(--border-size4);
  padding: var(--font-xxxs) var(--font-xxs);
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.textMuted};
  box-shadow: var(--box-shadow-small);
  appearance: none;
  &:after {
    /* Styling the down arrow */
    border-left: 0.25em solid transparent;
    border-right: 0.25em solid transparent;
    border-top: 0.375em solid darken(#1fbded, 25%);
  }
  &:before,
  &:after {
    position: absolute;
    top: 50%;
    right: 1em;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    pointer-events: none;
  }

  &:before {
    transform: translateY(-125%);
    /* Styling the down arrow */
    border-left: 0.25em solid transparent;
    border-right: 0.25em solid transparent;
    border-bottom: 0.375em solid darken(#1fbded, 25%);
  }
`
const Select = () => {
  return (
    <form action="">
      <label
        htmlFor="categories"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <StyledSelect name="categories" id="categories">
          <option value="select">categories</option>
          <option value="cat1">cat1</option>
          <option value="cat2">cat2</option>
          <option value="cat3">cat3</option>
          <option value="cat4">cat4</option>
        </StyledSelect>
      </label>
    </form>
  )
}
export default Select
