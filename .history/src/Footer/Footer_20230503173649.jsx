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
  max-width: 1200px;
  margin: 0 auto;
  /* text-align: center; */
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  > div {
    min-height: 7rem;
    flex-basis: 33%;
  }
  > div > h4 {
    margin-top: 0;
  }
  > div > ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row wrap;
    /* justify-content: space-evenly; */
    @media (min-width: 550px) {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }
  }
  > div > ul > li {
    margin-right: 1rem;
  }
  > address {
    /* flex-basis: 33%; */
    margin-top: 2rem;
    font-weight: bold;
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
