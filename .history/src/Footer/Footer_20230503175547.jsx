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
  padding: 3rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  text-align: center;
  @media (min-width: 550px) {
    flex-flow: row wrap;
  }
  > div {
    min-height: 7rem;
    flex-basis: 33%;
    @media (min-width: 550px) {
      flex-basis: 33%;
      min-height: 0;
      flex-basis: 33%;
    }
  }
  > div > h4 {
    margin: 10px;
  }
  > div > ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    list-style-type: none;
    @media (min-width: 550px) {
      flex-flow: column wrap;
    }
  }
  > address {
    flex-basis: 33%;
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
                LinkedIn
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
          <ul>
            <li>About Us</li>
            <li>Contact us</li>
          </ul>
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
