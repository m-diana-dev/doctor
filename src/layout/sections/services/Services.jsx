import styled from "styled-components";
import {Container} from "../../../components/Container.js";
import {FlexWrapp} from "../../../components/FlexWrapp.js";
import {SectionTitle} from "../../../components/SectionTitle.js";
import {ServicesItem, StyledServicesItem} from "./servicesItem/ServicesItem.jsx";


//секция услуги. Принимает пропсы openServices, isServicesOpenCallback, dispatch
export const Services = ({openServices, isServicesOpenCallback, dispatch}) => {
    //массив данных для секции услуг
    const servicesData = [
        {
            title: `Запись на прием врача\nв клинике`,
            text: 'Наши врачи – это специалисты высшей категории и кандидаты медицинских наук. Они диагностируют и остановят процесс ухудшения вашего зрения.',
            buttonText: 'Выбрать врача',
            buttonLink: '#doctors',
        },
        {
            title: `Выбрать услуги\nклиники`,
            text: 'Диагностика, биометрия, подбор очков и линз. Записаться на прием можно в любое удобное для вас время.',
            buttonText: 'Выбрать услугу',
            buttonLink: '#price',
        },
        {
            title: 'Диагностика',
            text: 'В арсенале нашей клиники имеется широкий спектр диагностического оборудования, в том числе уникальные модели, для диагностики глазных заболеваний.',
            buttonText: 'Подробнее',
            titleModal: 'Мы предоставляем гарантию',
            listModal: ['высокоточная и детальная диагностика зрения, а также исследование глазного дна, будут проведены в течение 1-2 часов, без утомительного ожидания;', 'по результатам диагностики пациент получит на руки подробную выписку о состоянии органа зрения и детальные рекомендации по лечению и профилактике имеющейся патологии;', 'пациент может проконсультироваться с врачом-офтальмологом;', 'клиника оснащена современным и безопасным оборудованием, позволяющим добиться высокой точности результатов диагностики;', 'принцип нашей работы: «внимание и подход к каждому пациенту!»']
        },
        {
            title: 'Оптика',
            text: 'Подбор очков для зрения или контактных линз — это весьма важная задача, требующая максимально точного решения. Именно от него будет зависеть острота зрения пациента.',
            buttonText: 'Подробнее',
            titleModal: 'Как происходит подбор очков или контактных линз в клинике?',
            listModal: ['Врач-офтальмолог или оптометрист в нашем клинике внимательно выслушает Ваши жалобы и соберет первичный анамнез', 'Проведет комплексное обследование зрения, выяснив остроту зрения (вдали и вблизи), рефракцию, аккомодацию глаза и биомикроскопию', 'Определит радиус кривизны и диаметр роговицы', 'Предложит средство коррекции зрения и обязательно оценит бинокулярный баланс в предложенном средстве коррекции']
        }
    ]
    return (
        <ServicesStyled id='services'>
            <Container>
                <SectionTitle>Основные услуги</SectionTitle>
                <FlexWrapp justify={'center'} wrap={'wrap'} align={'stretch'}>
                    {/*с помощью map проходимся по массиву и отрисовываем услуги*/}
                    {servicesData.map((el, index) => {
                        return (
                            <ServicesItem key={index}
                                          title={el.title}
                                          text={el.text}
                                          buttonText={el.buttonText}
                                          buttonLink={el.buttonLink}
                                          titleModal={el.titleModal}
                                          listModal={el.listModal}
                                          openServices={openServices}
                                          isServicesOpenCallback={isServicesOpenCallback}
                                          dispatch={dispatch}/>
                        )
                    })}
                </FlexWrapp>
            </Container>
        </ServicesStyled>
    );
}

// стили секции услуги
const ServicesStyled = styled.section`
  padding: 40px 0;
  @media ${({theme})=>theme.media.tablet}{
    padding: 25px 0;
  }

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
      @media ${({theme}) => theme.media.tablet} {
        width: calc(50% - 10px);
        margin-bottom: 10px;
      }
      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }

    &:nth-child(3),
    &:nth-child(4) {
      min-width: 385px;
      @media ${({theme}) => theme.media.tablet} {
        width: calc(50% - 10px);
        min-width: calc(50% - 10px);
      }
      @media screen and (max-width: 600px) {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
`