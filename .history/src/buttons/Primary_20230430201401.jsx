import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  font-size: 0.875rem;
  font-size: 14px;
  font-weight: 450;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;

  ${(props) =>
    props.$primary &&
    css`
      background: palevioletreds;
      color: white;
    `};
`
export default Button
