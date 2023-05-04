import styled from 'styled-components'
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const FooterWraper = styled.section`
  background-color: ${(props) => props.theme.footer};
  color: #474a56;
`
const StyledFooter = styled.footer`
  display: flex;
  > div {
    display: flex;
    fle
  }
`

const Footer = () => {
  return (
    <FooterWraper>
      <StyledFooter>
        <div>
          <h4>Connect with us</h4>
          <ul>
            <li>
              <a href="">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <address>
          Art Land <br />
          Art Street <br />
          Art Building <br />
        </address>
      </StyledFooter>
    </FooterWraper>
  )
}

export default Footer
