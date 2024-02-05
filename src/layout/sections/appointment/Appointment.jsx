import styled from "styled-components";
import {Container} from "../../../components/Container.js";
import {FlexWrapp} from "../../../components/FlexWrapp.js";
import {SectionTitle} from "../../../components/SectionTitle.js";
import {Button, StyledButton} from "../../../components/button/Button.jsx";
import bg from "../../../assets/images/appointment/bg.jpeg"
import {Checkbox} from "../../../components/checkbox/Checkbox.jsx";

export const Appointment = () => {
    return (
        <StyledAppointment>
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
                    <AppointmentForm>
                        <AppointmentFormWrapp>
                            <FormTitle>Записаться на приём</FormTitle>
                            <InputsWrapp>
                                <Input placeholder='ФИО' type="text"></Input>
                                <Input placeholder='Номер телефона' type="text"></Input>
                                <Input placeholder='Услуга' type="text"></Input>
                                <Input placeholder='19/02/24' type="date"></Input>
                                <Button>Записаться на прием</Button>
                            </InputsWrapp>
                            <Checkbox/>
                        </AppointmentFormWrapp>
                    </AppointmentForm>
                </FlexWrapp>
            </Container>
        </StyledAppointment>
    );
}

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
const Input = styled.input`
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

const InputsWrapp = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`