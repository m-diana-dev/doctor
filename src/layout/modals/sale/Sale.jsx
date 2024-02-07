import styled, {css} from "styled-components";
import {CloseBtn} from "../CloseBtn.jsx";
import {StyledModalTile} from "../ModalTitle.js";
import {Button, StyledButton} from "../../../components/button/Button.jsx";
import {Icon} from "../../../components/icon/Icon.jsx";
import Countdown from "react-countdown";


// Модальное окносо скидкой. принимает как пропсы openSale, isSaleOpenCallback для изменения состояния
export const Sale = ({openSale, isSaleOpenCallback}) => {

    // Функция обратного вызова, которая меняет состояние модального окна, с ее помощью закрываем модальное окно
    const onModalHandler = () => {
        isSaleOpenCallback(!openSale)
    }

    // Отрисовка модального окна
    return (
        <StyledSale isOpen={openSale}>
            <CloseBtn onModalHandler={onModalHandler}/>
            <StyledModalTile>
                Cкидка 10% на первое посещение
            </StyledModalTile>
            <SaleTime>
                <Icon id='clock' width={'55'} height={'55'} viewBox={'0 0 56 56'}/>
                <SaleTimeTimer>
                    {/*Используем библиотеку react-countdown для счетчика*/}
                    <Countdown date={Date.now() + 500000000}/>
                    <SaleTimeDays><span>дней</span><span>часов</span><span>минут</span><span>секунд</span></SaleTimeDays>
                </SaleTimeTimer>
            </SaleTime>
            <Button onClick={onModalHandler} as={'a'} href='#appointment'>Записаться на прием</Button>
        </StyledSale>
    );
}


// стили для модального окна

const StyledSale = styled.div`
  display: none;
  position: fixed;
  max-width: 840px;
  width: 100%;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  padding: 45px 30px;
  text-align: center;
  background: rgb(255, 255, 255);
  z-index: 10;
  @media ${({theme})=>theme.media.desktop}{
    max-width: 600px;
  }
  @media ${({theme})=>theme.media.mobile}{
    max-width: 90%
  }

  ${props => props.isOpen && css`
    display: block;
  `}
  ${StyledButton} {
    border-radius: 3px;
    box-shadow: 0px 4px 10px 0px rgba(16, 109, 159, 0.34);
    background: linear-gradient(90.00deg, rgba(0, 0, 0, 0.2), rgb(59, 186, 194) 100%);
    max-width: 200px;
    margin: 0 auto;

    &::before {
      background: linear-gradient(90.00deg, rgb(34, 160, 217), rgb(59, 186, 194) 100%);
      border-radius: 3px;
    }
  }
`
const SaleTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  @media ${({theme})=>theme.media.mobile}{
    margin-bottom: 30px;
  }

  svg {
    margin-right: 30px;
    @media ${({theme})=>theme.media.mobile}{
      display: none;
    }
  }
`
const SaleTimeTimer = styled.div`
  > span {
    color: rgb(0, 0, 0);
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 8px;
    @media ${({theme})=>theme.media.mobile}{
      font-size: 35px;
    }
    @media ${({theme})=>theme.media.mobileSmall}{
      font-size: 30px;
    }
  }
`
const SaleTimeDays = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
  @media ${({theme})=>theme.media.mobile}{
    font-size: 20px;
  }
  @media ${({theme})=>theme.media.mobileSmall}{
    font-size: 18px;
  }
  span{
    &:not(:last-child){
      margin-right: 20px;
      @media ${({theme})=>theme.media.mobileSmall}{
        margin-right: 15px;
      }
    }
  }
`