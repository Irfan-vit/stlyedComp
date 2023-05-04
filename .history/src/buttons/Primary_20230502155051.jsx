import styled from 'styled-components'
import '../utils/colors.css'
import '../utils/typography.css'

const Button = styled.button`
  background: transparent;
  border-radius: var(--border-size4);
  cursor: pointer;
  font-size: var(--font-md);
  margin: var(--spacing-unit);
  padding: var(--font-xxxs) var(--font-xxs);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  border: 1px solid var(--primary-color, #5d4aec);
  background-color: ${(props) =>
    props.varient === 'outline'
      ? 'var( --text-on-primary)'
      : 'var(--primary-color)'};
  color: ${(props) =>
    props.varient === 'outline'
      ? 'var(--primary-color)'
      : 'var(--text-on-primary)'}; 
  

  /* ${(props) =>
    props.$primary &&
    css`
      background: palevioletreds;
      color: white;
    `}; */
`

const ErrorButton = styled(Button)`
  background-color: ${(props) =>
    props.varient === 'outline'
      ? 'var( --text-on-primary)'
      : 'var(--error-color)'};
`
export default Button
