import styled from 'styled-components'
import artist from '../assets/happy.svg'
import Lottie from 'lottie-react'
import rocket from '../assets/bms-rocket.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: rocket,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const StledMissionWrapper = styled.section`
  /* margin-bottom: 3rem; */
`
const StyledMission = styled.div`
  display: block;
  line-height: 1.7;
  @media (min-width: 550px) {
    display: flow-root;
    max-width: 900px;
  }
`
const MissionImage = styled.img`
  max-height: 100px;
  display: block;
  @media (min-width: 550px) {
    float: left;
    shape-outside: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    max-height: 211px;
  }
`
const style = {
  height: 300,
  width: 600,
}

const Mission = () => {
  return (
    <StledMissionWrapper>
      <h2>Our Mission</h2>
      <StyledMission>
        <p>
          {/* <MissionImage src={artist} alt="" /> */}
          {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
          <Lottie animationData={rocket} style={} resizeMode="center" autoSize />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto
          blanditiis libero saepe ipsa veritatis in, doloremque quam dolorum
          reiciendis mollitia cupiditate inventore numquam culpa natus et
          placeat illo aliquid? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Accusantium nemo ratione fugit laboriosam, sequi
          accusamus aliquid qui necessitatibus modi totam natus magni dolor
          distinctio quidem doloremque labore sed incidunt error!
        </p>
      </StyledMission>
    </StledMissionWrapper>
  )
}

export default Mission
