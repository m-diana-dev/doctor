import styled from "styled-components";
import mapImg from '../../../assets/images/map/main.jpg'

//секция с картой
export const Map = () => {
    return (
        <StyledMap id='contacts'>
            <img src={mapImg} alt="map"/>
        </StyledMap>
    );
}
//стили секции
const StyledMap = styled.section`
  position: relative;
  height: 600px;
  @media ${({theme})=>theme.media.desktop}{
    height: 500px;
  }
  @media ${({theme})=>theme.media.mobile}{
    height: 400px;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`