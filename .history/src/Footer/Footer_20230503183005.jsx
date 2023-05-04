import styled from 'styled-components'
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const FooterWraper = styled.section`
  background-color: ${(props) => props.theme.footer};
  color: #474a56;
`
const StyledFooter = styled.footer`
  > * h4 {
    font-size: var(--font-xl);
  }
  padding: 2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  @media (min-width: 550px) {
    padding: 4rem;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  > div > ul {
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  > div > ol {
    list-style-type: none;
  }
  > div > ul,
  div > ol,
  div > address {
    margin-bottom: 2rem;
    @media (min-width: 550px) {
      margin: 0 auto;
    }
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
        <div>
          <h4>Quick Links</h4>
          <ol>
            <li>About Us</li>
            <li>Contact us</li>
          </ol>
        </div>
        <address>
          <h4>
            <FaMapMarkerAlt />
            Locate Us At
          </h4>
          Art Land <br />
          Art Street <br />
          Art Building <br />
        </address>
      </StyledFooter>
    </FooterWraper>
  )
}

export default Footer
