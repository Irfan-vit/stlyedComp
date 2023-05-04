import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`
const Card = styled.figure`
    margin:0;
    
`

const ImageCard = () => {
  return (
    <div>
      <figure>
        <img src="" alt="" />
        <figcaption></figcaption>
      </figure>
    </div>
  )
}
