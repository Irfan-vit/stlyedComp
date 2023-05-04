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
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  min-height: 4rem;
  padding: 4rem;
  @media (min-width: 550px) {
    flex-flow: row wrap;
  }

  > div > ul {
    display: flex;
    justify-content: flex-start;
    padding: ;
    @media (min-width: 550px) {
      justify-content: space-evenly;
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
        <address>
          <h4>
            Locate Us At <FaMapMarkerAlt />
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
