import styled from "styled-components";
import {Container} from "../../../components/Container.js";
import {SectionTitle} from "../../../components/SectionTitle.js";
import {DoctorsItem, StyledDoctorsItem} from "./doctorsItem/DoctorsItem.jsx";
import doctor1 from '../../../assets/images/doctors/item-1.jpeg'
import doctor2 from '../../../assets/images/doctors/item-2.jpeg'
import doctor3 from '../../../assets/images/doctors/item-3.jpeg'
import doctor4 from '../../../assets/images/doctors/item-4.jpeg'
import doctor5 from '../../../assets/images/doctors/item-5.jpg'
import doctor6 from '../../../assets/images/doctors/item-6.jpg'
import doctor7 from '../../../assets/images/doctors/item-7.jpg'
import doctor8 from '../../../assets/images/doctors/item-8.jpg'


//секция врачи
export const Doctors = ({openDoctors, isDoctorsOpenCallback, dispatch}) => {
    //массив данных для секции врачи
    const doctorsData = [
        {
            img:doctor1,
            imgExpanded: doctor5,
            name: {firstName: 'Лейля', lastName: 'Салихова', surName: 'Рифовна'},
            position: 'Врач-офтальмолог',
            positionExpanded: 'Главный врач-офтальмолог высшей категории, офтальмохирург',
            experience: '17 лет',
            specialization: 'диагностика зрения, удаление катаракты, лечение глаукомы',
        },
        {
            img:doctor2,
            imgExpanded: doctor6,
            name: {firstName: 'Ирина', lastName: 'Уэтова', surName: 'Викторовна'},
            position: 'Врач-офтальмолог',
            positionExpanded: 'Врач-офтальмолог высшей категории, офтальмохирург',
            experience: '11 лет',
            specialization: 'диагностика зрения',
        },
        {
            img:doctor3,
            imgExpanded: doctor7,
            name: {firstName: 'Зульфия', lastName: 'Шакирзянова', surName: 'Дакирзяновна'},
            position: 'Врач-офтальмолог',
            positionExpanded: 'Врач-офтальмолог, детский врач-офтальмолог',
            experience: '10 лет',
            specialization: 'детское',
        },
        {
            img:doctor4,
            imgExpanded: doctor8,
            name: {firstName: 'Елена', lastName: 'Корнева', surName: 'Викторовна'},
            position: 'Врач-офтальмолог',
            positionExpanded: 'Врач-офтальмолог, кандидат медицинских наук',
            experience: '12 лет',
            specialization: 'диагностика заболеваний сетчатки и зрительного нерва, лечение глаукомы',
        },
    ]
    return (
        <StyledDoctors id='doctors'>
            <Container>
                <SectionTitle>Наши врачи</SectionTitle>
                <DoctorsText>
                    У нас  работают только опытные специалисты с многолетним опытом работы.
                </DoctorsText>
                <DoctorsItems>
                    {/*с помощью map проходимся по массиву и отрисовываем докторов*/}
                    {doctorsData.map((el, index)=>{
                        return(
                            <DoctorsItem key={index}
                                         img={el.img}
                                         name={el.name}
                                         position={el.position}
                                         imgPopup={el.imgExpanded}
                                         positionPopup={el.positionExpanded}
                                         experience={el.experience}
                                         specialization={el.specialization}
                                         openDoctors={openDoctors}
                                         isDoctorsOpenCallback={isDoctorsOpenCallback}
                                         dispatch={dispatch}/>
                        )
                    })}
                </DoctorsItems>
            </Container>
        </StyledDoctors>
    );
}


//стили секции врачи
const StyledDoctors = styled.section`
  padding: 80px 0 50px;
  background: linear-gradient(180.00deg, rgb(241, 248, 255) 2.422%,rgba(233, 237, 246, 0) 97.667%);
  @media ${({theme})=>theme.media.tablet}{
    padding: 60px 0 40px;
  }
  @media ${({theme})=>theme.media.mobile}{
    padding: 30px 0;
  }
  ${Container}{
    z-index: 2;
  }
  ${SectionTitle}{
    margin-bottom: 45px;
    @media ${({theme})=>theme.media.tablet}{
      margin-bottom: 35px;
    }
    @media ${({theme})=>theme.media.mobile}{
      margin-bottom: 25px;
    }
  }
`
const DoctorsText = styled.div`
  font-size: 16px;
  line-height: 130%;
  max-width: 385px;
  margin: 0 auto 70px;
  text-align: center;
  @media ${({theme}) => theme.media.tablet} {
    margin: 0 auto 50px;
  }
  @media ${({theme})=>theme.media.mobile}{
    margin: 0 auto 30px;
  }
`
const DoctorsItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

  ${StyledDoctorsItem} {
    width: calc(25% - 20px);
    @media ${({theme})=>theme.media.tablet}{
      width: calc(50% - 10px);
      margin-bottom: 20px;
    }
    @media ${({theme})=>theme.media.mobileSmall}{
      width: 100%;
      margin-bottom: 10px;
    }
  }
`