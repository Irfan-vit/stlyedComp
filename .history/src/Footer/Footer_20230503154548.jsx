import styled from 'styled-components'
import flower from '../assets/flower.svg'

const FooterWraper = styled.section`
  background-color: ${(props) => props.footer};
  color: ${(props) => props.f};
`

const Footer = () => {
  return (
    <FooterWraper>
      <footer>
        <div>
          <h4>Connect with us</h4>
          <ul>
            <li>
              <a href="">twitter</a>
            </li>
            <li>
              <a href="">linkedin</a>
            </li>
            <li>
              <a href="">instagram</a>
            </li>
          </ul>
        </div>
        <address>
          Art Land <br />
          Art Street <br />
          Art Building <br />
        </address>
      </footer>
    </FooterWraper>
  )
}

export default Footer
