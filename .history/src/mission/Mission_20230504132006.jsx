import styled from 'styled-components'
import artist from '../assets/rocketr.svg'

const StledMissionWrapper = styled.section`
  margin-bottom: 3rem;
`
const StyledMission = styled.div`
  display: block;
  line-height: 1.7;
`
const MissionImage = styled.img`
  max-height: 100px;
  display: block;
`

const Mission = () => {
  return (
    <StledMissionWrapper>
      <h2>Our Mission</h2>
      <StyledMission>
        <p>
          <MissionImage src={artist} alt="" />
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
