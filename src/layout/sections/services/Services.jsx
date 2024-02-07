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
                                  text={'Диагностика зрения у детей (0+) и взрослых: бесконтактно и безболезненно.'}
                                  icon={'services1'} iconW={'60'} iconH={'48'} iconBox={'0 0 60 50'}/>
                    <ServicesItem title={'Оптика'}
                                  text={'Если вы нуждаетесь в коррекции зрения, мы подберем качественные и безопасные очки или линзы для глаз.'}
                                  icon={'services2'} iconW={'80'} iconH={'30'} iconBox={'0 0 80 32'}/>
                </FlexWrapp>
            </Container>
        </ServicesStyled>
    );
}

// стили секции услуги
const ServicesStyled = styled.section`
  padding: 128px 0 100px;
  @media ${({theme}) => theme.media.tablet} {
    padding: 80px 0;
  }
  @media ${({theme}) => theme.media.mobile} {
    padding: 50px 0;
  }

  ${SectionTitle} {
    margin-bottom: 48px;
    @media ${({theme}) => theme.media.tablet} {
      margin-bottom: 35px;
    }
    @media ${({theme}) => theme.media.mobile} {
      margin-bottom: 25px;
    }
  }

  ${StyledServicesItem} {
    margin: 0 15px;
    @media ${({theme}) => theme.media.tablet} {
      margin: 0 5px;
    }
    @media screen and (max-width: 600px) {
      margin: 0;
    }

    &:nth-child(1),
    &:nth-child(2) {
      width: calc(48% - 30px);
      margin-bottom: 30px;
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
        margin: 0 auto 36px;
        @media screen and (max-width: 600px) {
          max-width: 100%;
          text-align: center;
        }
      }
    }

    &:nth-child(3),
    &:nth-child(4) {
      width: calc(33% - 30px);
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
        max-width: 230px;
        @media ${({theme}) => theme.media.mobile} {
          max-width: 100%;
        }
      }
    }
  }
`