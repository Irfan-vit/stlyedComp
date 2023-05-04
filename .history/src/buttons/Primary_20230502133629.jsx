import styled, { css } from 'styled-components'
import '../utils/colors.css'
import '../utils/typography.css'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.875rem;
  font-size: 14px;
  font-weight: 450;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  border: 1px solid var(--primary-color, #5d4aec);
  color: var(--text-on-primary, #fff);
  background-color: var(--primary-color, #5d4aec);

  ${(props) =>
    props.$primary &&
    css`
      background: palevioletreds;
      color: white;
    `};
`
export default Button
