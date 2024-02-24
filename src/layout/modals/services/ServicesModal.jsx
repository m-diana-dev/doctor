import styled, {css} from "styled-components";
import {CloseBtn} from "../CloseBtn.jsx";


// Модальное окносо услуги. принимает как пропсы openServices, isServicesOpenCallback для изменения состояния
export const ServicesModal = ({title, list, openServices, isServicesOpenCallback}) => {

    // Функция обратного вызова, которая меняет состояние модального окна, с ее помощью закрываем модальное окно
    const onModalHandler = () => {
        isServicesOpenCallback(!openServices)
    }

    // Отрисовка модального окна
    return (
        <StyledServicesModal isOpen={openServices}>
            <CloseBtn idIcon={'close-shadow'} onModalHandler={onModalHandler}/>
            <ServicesModalTile>{title}</ServicesModalTile>
            <ServicesModalList>
                {list && list.map((el,index)=><ServicesModalItem key={index}>-{el}</ServicesModalItem>)}
            </ServicesModalList>
        </StyledServicesModal>
    );
}


// стили для модального окна

const StyledServicesModal = styled.div`
  display: none;
  position: fixed;
  max-width: 1117px;
  width: 100%;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  padding: 50px 40px;
  text-align: center;
  background: #0b79ba;
  z-index: 10;
  @media ${({theme}) => theme.media.desktop} {
    max-width: 90%
  }
  @media ${({theme}) => theme.media.mobile} {
    padding: 40px 20px;
  }
  ${props => props.isOpen && css`
    display: block;
  `}
`

const ServicesModalTile = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  color: #fff;
  margin-bottom: 28px;
  @media ${({theme}) => theme.media.desktop} {
    font-size: 32px;
  }
  @media ${({theme}) => theme.media.mobile} {
    font-size: 26px;
    margin-bottom: 20px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 22px;
    margin-bottom: 15px;
  }
`
const ServicesModalList = styled.ul`
  max-width: 980px;
  width: 100%;
  text-align: left;
`
const ServicesModalItem = styled.li`
  font-weight: 500;
  font-size: 24px;
  line-height: 108%;
  color: #fff;
  &:not(:last-child){
    margin-bottom: 20px;
    @media ${({theme}) => theme.media.mobile} {
      margin-bottom: 10px;
    }
  }
  @media ${({theme}) => theme.media.desktop} {
    font-size: 20px;
  }
  @media ${({theme}) => theme.media.mobile} {
    font-size: 18px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 16px;
  }
`