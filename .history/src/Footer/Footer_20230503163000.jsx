import styled from 'styled-components'
import flower from '../assets/flower.svg'

const FooterWraper = styled.section`
  background-color: ${(props) => props.theme.footer};
  color: #474a56;

  > footer {
    padding: 3rem;
    display: flex;
    flex-flow: column wrap;
    max-width: 100vw;
    margin: 0 auto;
  }
  > footer > h4 {
    margin-top: 0;
  }
  > footer > li {
    margin-right: 1rem;
  }
  > footer > address {
    font-style: normal;
    margin-top: 2rem;
    font-weight: bold;
  }
  @media (min-width: 550px),  {
    > footer {
    }
  }
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
