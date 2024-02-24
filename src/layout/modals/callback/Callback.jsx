import styled, {css} from "styled-components";
import {CloseBtn} from "../CloseBtn.jsx";
import {StyledModalTile} from "../ModalTitle.js";
import {Checkbox, CheckboxText} from "../../../components/checkbox/Checkbox.jsx";
import {Button, StyledButton} from "../../../components/button/Button.jsx";
import {Controller, useForm} from "react-hook-form";

// Модальное окно c формой. принимает как пропсы isFormOpenCallback, openForm для изменения состояния
export const Callback = ({isFormOpenCallback, openForm}) => {

    // Функция обратного вызова, которая меняет состояние модального окна, с ее помощью закрываем модальное окно
    const onModalHandler = () => {
        isFormOpenCallback(!openForm)
    }

    //используем библиотеку react-hook-form для работы с формой
    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        control
    } = useForm({
        mode: "onBlur"
    })

    //функция отрабатывает по клику на кнопку в форме, а именно закрывает ее, если ошибо в форме нет
    const onButtonHandler = () => {
        if (!errors) isFormOpenCallback(!openForm)
    }

    // Отрисовка модального окна
    return (
        <StyledCallback isOpen={openForm}>
            <CloseBtn onModalHandler={onModalHandler} idIcon={'close'}/>
            <StyledModalTile>
                Заказать обратный звонок
            </StyledModalTile>
            <CallbackForm onSubmit={handleSubmit(() => {
            })}>
                <InputWrapp>
                    {/*Используем функционал библиотеки react-hook-form, валидируем поля*/}
                    <Input {...register('fio',
                        {
                            required: 'обязательное поле',
                            minLength: {value: 5, message: 'минимальная длина - 5 символов'}
                        })}
                           placeholder='ФИО' type="text"></Input>
                    {/*Отрисовыаем ошибки, если они есть*/}
                    {errors?.fio && <FormError>{errors.fio.message && errors.fio.message.toString()}</FormError>}
                </InputWrapp>
                <InputWrapp>
                    {/*Используем функционал библиотеки react-hook-form, валидируем поля*/}
                    <Input {...register('phone',
                        {
                            required: 'обязательное поле',
                            pattern: {
                                value: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
                                message: 'некорректный номер'
                            }
                        })} placeholder='Номер телефона' type="text"></Input>
                    {/*Отрисовыаем ошибки, если они есть*/}
                    {errors?.phone && <FormError>{errors.phone.message && errors.phone.message.toString()}</FormError>}
                </InputWrapp>
                {/*Используем функционал библиотеки react-hook-form*/}
                <Controller
                    name="agree"
                    control={control}
                    defaultValue={true}
                    rules={{
                        required: true,
                    }}
                    render={({field: {onChange, value}}) => (
                        <Checkbox checked={value} onChange={onChange}/>
                    )}
                />
                <Button onClick={onButtonHandler}>Отправить</Button>
            </CallbackForm>
        </StyledCallback>
    );
}

// стили для модального окна

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

const InputWrapp = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  @media ${({theme}) => theme.media.mobileSmall} {
    margin-bottom: 10px;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 0 30px;
  height: 86px;
  border-radius: 6px;
  box-shadow: inset 0px 4px 4px 0px rgba(201, 210, 234, 0.29);
  background: rgba(201, 210, 234, 0.1);
  font-size: 24px;
  font-weight: 500;

  &::placeholder {
    color: rgb(126, 131, 174);
  }

  @media ${({theme}) => theme.media.desktop} {
    padding: 0 20px;
    height: 60px;
    border-radius: 4px;
    font-size: 20px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    padding: 0 20px;
    border-radius: 4px;
    font-size: 18px;
  }
`

const FormError = styled.div`
  position: absolute;
  bottom: -15px;
  font-size: 14px;
  color: #c40a0a;
`