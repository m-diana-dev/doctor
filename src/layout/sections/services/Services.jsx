import styled from "styled-components";
import {Container} from "../../../components/Container.js";
import {FlexWrapp} from "../../../components/FlexWrapp.js";
import {SectionTitle} from "../../../components/SectionTitle.js";
import {ServicesItem, ServicesItemText, StyledServicesItem} from "./servicesItem/ServicesItem.jsx";


//секция услуга
export const Services = () => {
    return (
        <ServicesStyled id='services'>
            <Container>
                <SectionTitle>Основные услуги</SectionTitle>
                <FlexWrapp justify={'center'} wrap={'wrap'} align={'stretch'}>
                    <ServicesItem title={`Запись на прием врача\nв клинике`}
                                  text={'Наши врачи – это специалисты высшей категории и кандидаты медицинских наук. Они диагностируют и остановят процесс ухудшения вашего зрения.'}
                                  buttonText={'Выбрать врача'}
                                  buttonLink={'#doctors'}/>
                    <ServicesItem title={`Выбрать услуги\nклиники`}
                                  text={'Диагностика, биометрия, подбор очков и линз. Записаться на прием можно в любое удобное для вас время.'}
                                  buttonText={'Выбрать услугу'}
                                  buttonLink={'#price'}/>
                    <ServicesItem title={'Диагностика'}
                                  text={'В арсенале нашей клиники имеется широкий спектр диагностического оборудования, в том числе уникальные модели, для диагностики глазных заболеваний.'}
                                  icon={'services1'} iconW={'90'} iconH={'81'} iconBox={'0 0 60 51'}/>
                    <ServicesItem title={'Оптика'}
                                  text={'Подбор очков для зрения или контактных линз — это весьма важная задача, требующая максимально точного решения. Именно от него будет зависеть острота зрения пациента и, следовательно, безопасность его жизни.'}
                                  icon={'services2'} iconW={'121'} iconH={'108'} iconBox={'0 0 80 51'}/>
                </FlexWrapp>
            </Container>
        </ServicesStyled>
    );
}

// стили секции услуги
const ServicesStyled = styled.section`
  padding: 40px 0 10px;

  ${SectionTitle} {
    margin-bottom: 50px;
    @media ${({theme}) => theme.media.tablet} {
      margin-bottom: 35px;
    }
    @media ${({theme}) => theme.media.mobile} {
      margin-bottom: 25px;
    }
  }

  ${StyledServicesItem} {
    margin: 0 15px;
    width: calc(48% - 30px);
    @media ${({theme}) => theme.media.tablet} {
      margin: 0 5px;
    }
    @media screen and (max-width: 600px) {
      margin: 0;
    }

    &:nth-child(1),
    &:nth-child(2) {
      margin-bottom: 15px;
      justify-content: center;
      text-align: center;
      @media ${({theme}) => theme.media.tablet} {
        width: calc(50% - 10px);
        margin-bottom: 10px;
      }
      @media screen and (max-width: 600px) {
        width: 100%;
      }

      ${ServicesItemText} {
        max-width: 355px;
        text-align: left;
        margin: 0 auto 10px;
        @media screen and (max-width: 600px) {
          max-width: 100%;
          text-align: center;
        }
      }
    }

    &:nth-child(3),
    &:nth-child(4) {
      min-width: 385px;
      @media ${({theme}) => theme.media.tablet} {
        width: calc(50% - 10px);
        min-width: calc(50% - 10px);
      }
      @media ${({theme}) => theme.media.mobile} {
        text-align: center;
      }
      @media screen and (max-width: 600px) {
        width: 100%;
        margin-bottom: 10px;
      }

      ${ServicesItemText} {
        max-width: 350px;
        @media ${({theme}) => theme.media.mobile} {
          max-width: 100%;
        }
      }
    }
  }
`