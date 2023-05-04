import styled from 'styled-components'
import '../utils/colors.css'
import '../utils/typography.css'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  cursor: pointer;
  font-size: var(--font-md);
  margin: var(--spacing-unit);
  padding: var(--font-xxxs) var(--font-xxs);
  font-weight: var(--font-weight-norma);
  text-decoration: none;
  border: 1px solid var(--primary-color, #5d4aec);
  color: ${props => props.$primary var(--text-on-primary, #fff);
  background-color: var(--primary-color, #5d4aec);

  ${(props) =>
    props.$primary &&
    css`
      background: palevioletreds;
      color: white;
    `};
`
export default Button
