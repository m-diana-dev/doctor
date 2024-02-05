import styled from "styled-components";
import {Container} from "../../../components/Container.js";
import {SectionTitle} from "../../../components/SectionTitle.js";
import {DoctorsItem, StyledDoctorsItem} from "./doctorsItem/DoctorsItem.jsx";
import doctor1 from '../../../assets/images/doctors/item-1.jpeg'
import doctor2 from '../../../assets/images/doctors/item-2.jpeg'
import doctor3 from '../../../assets/images/doctors/item-3.jpeg'
import doctor4 from '../../../assets/images/doctors/item-4.jpeg'

export const Doctors = () => {
    return (
        <StyledDoctors id='doctors'>
            <Container>
                <SectionTitle>Наши врачи</SectionTitle>
                <DoctorsText>
                    У нас  работают только опытные специалисты с многолетним опытом работы.
                </DoctorsText>
                <DoctorsItems>
                    <DoctorsItem img={doctor1} name={'Лейля Салихова'} position={'Врач-офтальмолог'}/>
                    <DoctorsItem img={doctor2} name={'Ирина Уэтова'} position={'Врач-офтальмолог'}/>
                    <DoctorsItem img={doctor3} name={'Зульфия Шакирзянова'} position={'Врач-офтальмолог'}/>
                    <DoctorsItem img={doctor4} name={'Елена Викторовна'} position={'Врач-офтальмолог'}/>
                </DoctorsItems>
            </Container>
        </StyledDoctors>
    );
}

const StyledDoctors = styled.section`
  padding: 100px 0 80px;
  background: linear-gradient(180.00deg, rgb(241, 248, 255) 2.422%,rgba(233, 237, 246, 0) 97.667%);
  @media ${({theme})=>theme.media.tablet}{
    padding: 80px 0;
  }
  @media ${({theme})=>theme.media.mobile}{
    padding: 50px 0;
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