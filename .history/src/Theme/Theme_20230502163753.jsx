import styled from 'styled-components'
import '../utils/colors.css'
import '../utils/typography.css'

const Main = styled.div`
  background-color: ${(props) => props.theme.bg};
  color: ${props => props.theme.fg};
`
