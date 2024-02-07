import styled from "styled-components";
import {Container} from "../../../components/Container.js";
import {FlexWrapp} from "../../../components/FlexWrapp.js";
import {SectionTitle} from "../../../components/SectionTitle.js";
import {Button, StyledButton} from "../../../components/button/Button.jsx";
import bg from "../../../assets/images/appointment/bg.jpeg"
import calendarImg from "../../../assets/images/appointment/calendar.svg"
import {Checkbox} from "../../../components/checkbox/Checkbox.jsx";
import {Controller, useForm} from "react-hook-form";

//секция запись на прием
export const Appointment = () => {

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

    //отрисовка секции
    return (
        <StyledAppointment id='appointment'>
            <Container>
                <FlexWrapp justify={'space-between'}>
                    <AppointmentContent>
                        <SectionTitle>Запишитесь на прием</SectionTitle>
                        <AppointmentSubtitle>
                            Заполните форму для записи на прием
                            к офтальмологу. Наши администраторы свяжутся
                            с вами сразу как освободятся.
                        </AppointmentSubtitle>
                        <AppointmentText>
                            Благодаря нашему сервису и доброжелательному отношению вы не потратите время зря и не
                            простоите в очередях весь день.
                        </AppointmentText>
                        <AppointmentText>
                            Мы предварительно ответим на ваши вопросы, запишем на удобное для вас время и напомним вам о
                            записи заранее.
                        </AppointmentText>
                    </AppointmentContent>
                    <AppointmentForm onSubmit={handleSubmit(()=>{})}>
                        <AppointmentFormWrapp>
                            <FormTitle>Записаться на приём</FormTitle>
                            <InputsWrapp>
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
                                        {required: 'обязательное поле', pattern: {value: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/, message: 'некорректный номер'}})} placeholder='Номер телефона' type="text"></Input>
                                    {/*Отрисовыаем ошибки, если они есть*/}
                                    {errors?.phone && <FormError>{errors.phone.message && errors.phone.message.toString()}</FormError>}
                                </InputWrapp>
                                <InputWrapp>
                                    {/*Используем функционал библиотеки react-hook-form, валидируем поля*/}
                                    <Input {...register('service',
                                    {required: 'обязательное поле'})} placeholder='Услуга' type="text"></Input>
                                    {errors?.service && <FormError>{errors.service.message && errors.service.message.toString()}</FormError>}
                                </InputWrapp>
                                <InputWrapp>
                                    {/*Используем функционал библиотеки react-hook-form, валидируем поля*/}
                                    <Input {...register('date',
                                    {required: 'обязательное поле'})} placeholder='19/02/24' type="date"></Input>
                                    {/*Отрисовыаем ошибки, если они есть*/}
                                    {errors?.date && <FormError>{errors.date.message && errors.date.message.toString()}</FormError>}
                                </InputWrapp>
                                <Button>Записаться на прием</Button>
                            </InputsWrapp>
                            {/*Используем функционал библиотеки react-hook-form, валидируем поля*/}
                            <Controller
                                name="agree"
                                control={control}
                                defaultValue={true}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <Checkbox checked={value} onChange={onChange} />
                                )}
                            />
                        </AppointmentFormWrapp>
                    </AppointmentForm>
                </FlexWrapp>
            </Container>
        </StyledAppointment>
    );
}

// стили секции
const StyledAppointment = styled.section`
  padding: 68px 0;
  background-image: url(${bg});
  background-size: cover;
  color: ${({theme}) => theme.colors.lightText};
  @media ${({theme}) => theme.media.mobile} {
    padding: 40px 0;
  }

  ${SectionTitle} {
    color: ${({theme}) => theme.colors.lightText};
    text-align: left;
    margin-bottom: 30px;
    @media ${({theme}) => theme.media.mobile} {
      margin-bottom: 20px;
    }
    @media ${({theme}) => theme.media.mobileSmall} {
      margin-bottom: 10px;
    }
  }

  ${FlexWrapp} {
    @media ${({theme}) => theme.media.mobile} {
      flex-direction: column;
    }
  }
`
const AppointmentContent = styled.div`
  max-width: 520px;
  width: 100%;
  margin-right: 70px;
  @media ${({theme}) => theme.media.mobile} {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`
const AppointmentSubtitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 10px;
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 18px;
  }
`
const AppointmentText = styled.p`
  max-width: 450px;
  width: 100%;
  font-size: 16px;
  line-height: 1.6;
`
const AppointmentForm = styled.form`
  max-width: 580px;
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 2px 10px 0px rgba(78, 127, 222, 0.2);
  background: rgb(255, 255, 255);
  color: ${({theme}) => theme.colors.text};
  @media ${({theme}) => theme.media.mobile} {
    max-width: 100%;
  }

  ${StyledButton} {
    border-radius: 3px;
    box-shadow: 0px 4px 10px 0px rgba(16, 109, 159, 0.34);
    background: linear-gradient(90.00deg, rgba(0, 0, 0, 0.2), rgb(59, 186, 194) 100%);
    max-width: 200px;
    @media screen and (max-width: 1400px) {
      margin-top: 10px;
      max-width: 100%;
    }

    &::before {
      background: linear-gradient(90.00deg, rgb(34, 160, 217), rgb(59, 186, 194) 100%);
      border-radius: 3px;
    }
  }

  input[type=date]::-webkit-calendar-picker-indicator {
    opacity: 0;
  }

  input[type=date] {
    background: url(${calendarImg}) no-repeat 95% 50%;
  }
`
const AppointmentFormWrapp = styled.div`
  width: 100%;
  padding: 47px 40px 26px;
  border-radius: 20px;
  box-shadow: 0px 2px 10px 0px rgba(78, 127, 222, 0.2);
  background: rgb(255, 255, 255);
  @media ${({theme}) => theme.media.tablet} {
    padding: 30px 20px 20px;
  }
`
const FormTitle = styled.div`
  color: rgb(27, 29, 50);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 30px;
  @media ${({theme}) => theme.media.tablet} {
    font-size: 20px;
    margin-bottom: 20px;
  }
  @media ${({theme}) => theme.media.mobile} {
    font-size: 18px;
  }
`
const FormError = styled.div`
  position: absolute;
  bottom: -15px;
  font-size: 14px;
  color: #c40a0a;
`

const InputWrapp = styled.div`
  position: relative;
  width: 100%;

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(4) {
    max-width: calc(50% - 10px);
    @media screen and (max-width: 1400px) {
      max-width: 100%;
    }
  }

  &:nth-child(1),
  &:nth-child(4) {
    margin-right: 20px;
    @media screen and (max-width: 1400px) {
      margin-right: 0;
    }
  }

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    margin-bottom: 20px;
    @media screen and (max-width: 1400px) {
      margin-bottom: 10px;
    }
  }
`
export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-radius: 6px;
  box-shadow: inset 0px 4px 4px 0px rgba(201, 210, 234, 0.29);
  background: rgba(201, 210, 234, 0.1);
  font-size: 16px;
  line-height: 26px;

  &::placeholder {
    color: rgb(126, 131, 174);
  }
`

const InputsWrapp = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`