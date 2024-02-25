import styled from "styled-components";
import {Button, StyledButton} from "../../../../components/button/Button.jsx";
import {setDataServicesModalAC} from "../../../../state/services-reducer.jsx";


//компонент услуги сайта, принимает пропсы title, text, buttonText, buttonLink, openServices, isServicesOpenCallback, titleModal, listModal, dispatch
export const ServicesItem = ({title, text, buttonText, buttonLink, openServices, isServicesOpenCallback, titleModal, listModal, dispatch}) => {
    //функция отрабатывает при клике по кнопке Подробнее (меняет состояние модального окна услуги)
    const onBtnHandler = () => {
        isServicesOpenCallback(!openServices);
        dispatch(setDataServicesModalAC(titleModal, listModal))
    };
    return (
        <StyledServicesItem>
            <ServicesItemTitle>{title}</ServicesItemTitle>
            <ServicesItemText>
                {text}
            </ServicesItemText>
            {buttonLink
                ? <Button as='a' href={buttonLink}>{buttonText}</Button>
                : <Button onClick={onBtnHandler}>{buttonText}</Button>}
        </StyledServicesItem>
    );
}


//стили услуги сайта
export const StyledServicesItem = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 6px;
  background: rgb(11, 121, 186);
  padding: 45px 60px 70px;
  min-height: 310px;
  color: ${({theme}) => theme.colors.lightText};
  position: relative;
  @media screen and (max-width: 1400px) {
    padding: 40px;
  }
  @media ${({theme}) => theme.media.tablet} {
    padding: 30px;
    min-height: auto;
  }
  @media ${({theme}) => theme.media.mobile} {
    padding: 20px;
  }

  svg {
    position: absolute;
    top: 80px;
    right: 60px;
    @media screen and (max-width: 1590px) {
      top: 20px;
      right: 20px;
    }
    @media screen and (max-width: 1400px) {
      top: 10px;
      right: 10px;
      transform: scale(0.8);
    }
    @media ${({theme}) => theme.media.tablet} {
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
  margin-bottom: 20px;
  white-space: pre-wrap;
  @media ${({theme}) => theme.media.tablet} {
    font-size: 22px;
  }
  @media ${({theme}) => theme.media.mobile} {
    font-size: 20px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 18px;
  }
`
export const ServicesItemText = styled.p`
  font-size: 14px;
  line-height: 160%;
  flex: 1 1 auto;
  text-align: left;
  max-width: 360px;
  width: 100%;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`