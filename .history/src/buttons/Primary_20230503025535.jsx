import styled from 'styled-components'
import '../utils/colors.css'
import '../utils/typography.css'
import { defaultTheme } from '../utils/theme'

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
      ? defaultTheme.textOnPrimary
      : defaultTheme.primaryColor}
  color: ${(props) =>
    props.varient === 'outline'
      ? 'var(--primary-color)'
      : 'var(--text-on-primary)'};
`

const ErrorButton = styled(Button)`
  border: 1px solid var(--error-color);
  background-color: ${(props) =>
    props.varient === 'outline'
      ? 'var( --text-on-primary)'
      : 'var(--error-color)'};
  color: ${(props) =>
    props.varient === 'outline'
      ? 'var(--error-color)'
      : 'var(--text-on-primary)'};
`
export { Button, ErrorButton }
