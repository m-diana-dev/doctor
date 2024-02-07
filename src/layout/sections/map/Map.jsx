import styled from "styled-components";

//секция с картой
export const Map = () => {
    return (
        <StyledMap id='contacts'>
            <MapTitle>Набережные Челны</MapTitle>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A7c8ab49153bae924032544c550c4a526289d6cde741678ab4574abbd95c9c574&amp;source=constructor"
                frameBorder="0"></iframe>
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
  iframe{
    width: 100%;
    height: 100%;
  }
`
const MapTitle = styled.div`
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({theme})=>theme.colors.lightText};
  font-size: 20px;
  font-weight: 500;
  padding: 8px 25px;
  border-radius: 3px;
  box-shadow: 0px 8px 10px 0px rgba(2, 142, 206, 0.32);
  white-space: nowrap;
  background: rgb(57, 182, 192);
  @media ${({theme})=>theme.media.mobile}{
    top: 30px;
    font-size: 18px;
  }
`