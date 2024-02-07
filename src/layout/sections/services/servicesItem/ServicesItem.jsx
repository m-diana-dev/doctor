import styled from "styled-components";
import {Button, StyledButton} from "../../../../components/button/Button.jsx";
import {Icon} from "../../../../components/icon/Icon.jsx";


//компонент услуги сайта, принимает пропсы title, text, buttonText, buttonLink, icon, iconW, iconH, iconBox
export const ServicesItem = ({title, text, buttonText, buttonLink, icon, iconW, iconH, iconBox}) => {
    return (
        <StyledServicesItem>
            {icon && <Icon id={icon} width={iconW} height={iconH} viewBox={iconBox}/>}
            <ServicesItemTitle>{title}</ServicesItemTitle>
            <ServicesItemText>
                {text}
            </ServicesItemText>
            {buttonText && <Button as='a' href={buttonLink}>{buttonText}</Button>}
        </StyledServicesItem>
    );
}


//стили услуги сайта
export const StyledServicesItem = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: rgb(11, 121, 186);
  padding: 40px;
  color: ${({theme}) => theme.colors.lightText};
  position: relative;
  @media ${({theme})=>theme.media.tablet}{
    padding: 30px;
  }
  @media ${({theme})=>theme.media.mobile}{
    padding: 20px;
  }

  svg {
    position: absolute;
    top: 42px;
    right: 20px;
    @media ${({theme})=>theme.media.mobile}{
      
      display: none;
    }
  }

  ${StyledButton} {
    display: block;
    margin: 0 auto;
  }
`

const ServicesItemTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 16px;
  white-space: pre-wrap;
  @media ${({theme})=>theme.media.tablet}{
    font-size: 22px;
  }
  @media ${({theme})=>theme.media.mobile}{
    font-size: 20px;
  }
  @media ${({theme})=>theme.media.mobileSmall}{
    font-size: 18px;
  }
`
export const ServicesItemText = styled.p`
  font-size: 14px;
  line-height: 160%;
  flex: 1 1 auto;
  &:not(:last-child){
    margin-bottom: 36px;
  }
`