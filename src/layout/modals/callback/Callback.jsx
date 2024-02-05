import styled, {css} from "styled-components";
import {CloseBtn} from "../CloseBtn.jsx";
import {StyledModalTile} from "../ModalTitle.js";
import {Checkbox, CheckboxText} from "../../../components/checkbox/Checkbox.jsx";
import {Button, StyledButton} from "../../../components/button/Button.jsx";
import {useState} from "react";


export const Callback = ({isFormOpenCallback, openForm}) => {
    const [isFormOpen, setIsFormOpen] = useState(openForm);

    const onModalHandler = () => {
        setIsFormOpen(!isFormOpen)
        isFormOpenCallback(!isFormOpen)
    }

    return (
        <StyledCallback isOpen={isFormOpen}>
            <CloseBtn onModalHandler={onModalHandler}/>
            <StyledModalTile>
                Заказать обратный звонок
            </StyledModalTile>
            <CallbackForm>
                <Input placeholder={'Ваше имя'} type={'text'}/>
                <Input placeholder={'Ваш номер телефона'} type={'text'}/>
                <Checkbox/>
                <Button onClick={onModalHandler}>Отправить</Button>
            </CallbackForm>
        </StyledCallback>
    );
}

const StyledCallback = styled.div`
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
  @media ${({theme}) => theme.media.desktop} {
    max-width: 600px;
  }
  @media ${({theme}) => theme.media.mobile} {
    max-width: 90%
  }

  ${props => props.isOpen && css`
    display: block;
  `}
  ${StyledButton} {
    font-size: 24px;
    font-weight: 500;
    width: 230px;
    border-radius: 3px;
    box-shadow: 0px 8px 10px 0px rgba(2, 142, 206, 0.32);
    background: linear-gradient(90.00deg, rgba(0, 0, 0, 0.18), rgb(59, 186, 194) 100%);
    margin: 0 auto;

    &:before {
      background: linear-gradient(90.00deg, rgb(34, 160, 217), rgb(59, 186, 194) 100%);
      border-radius: 3px;
    }
  }
`

const CallbackForm = styled.form`
  max-width: 430px;
  width: 100%;
  margin: 0 auto;

  ${CheckboxText} {
    text-align: left;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 0 30px;
  height: 86px;
  border-radius: 6px;
  box-shadow: inset 0px 4px 4px 0px rgba(201, 210, 234, 0.29);
  background: rgba(201, 210, 234, 0.1);
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  &::placeholder{
    color: rgb(126, 131, 174);
  }
  @media ${({theme})=>theme.media.desktop}{
    padding: 0 20px;
    height: 60px;
    border-radius: 4px;
    font-size: 20px;
  }
  @media ${({theme})=>theme.media.mobileSmall}{
    padding: 0 20px;
    border-radius: 4px;
    font-size: 18px;
    margin-bottom: 10px;
  }
`