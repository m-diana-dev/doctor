import styled from "styled-components";
import {Container} from "../../../components/Container.js";
import {SectionTitle} from "../../../components/SectionTitle.js";
import {PriceItem} from "./priceItem.jsx";


//секция сайта цены
export const Price = () => {
    return (
        <StyledPrice id='price'>
            <Container>
                <SectionTitle>Услуги и цены</SectionTitle>
                <PriceItems>
                    <PriceItem title={'Первичная консультация'} value={'700'}/>
                    <PriceItem title={'Комплексная диагностика'} value={'2 500'}/>
                    <PriceItem title={'Отдельные виды исследований'} value={'1 200'}/>
                    <PriceItem title={'Удаление новообразований на веках и глазном яблоке'} value={'1 600'}/>
                    <PriceItem title={'Детская офтальмология'} value={'600'}/>
                    <PriceItem title={'Аппаратное лечение'} value={'2 100'}/>
                    <PriceItem title={'Подбор очков и контактных линз'} value={'800'}/>
                </PriceItems>
            </Container>
        </StyledPrice>
    );
}
// стили секции
const StyledPrice = styled.section`
  padding: 50px 0 19px;
  @media ${({theme}) => theme.media.tablet} {
    padding: 30px 0 10px;
  }
  @media ${({theme}) => theme.media.mobile} {
    padding: 20px 0 5px;
  }
  ${SectionTitle}{
    margin-bottom: 65px;
    position: relative;
    @media ${({theme}) => theme.media.mobile} {
      margin-bottom: 30px;
    }
    &::before{
      content: '';
      position: absolute;
      width: 400px;
      height: 1px;
      background-color: rgb(0, 0, 0);
      bottom: -18px;
      left: 50%;
      transform: translateX(-50%);
      @media ${({theme}) => theme.media.mobile} {
        width: 240px;
        bottom: -10px;
      }
    }
  }
`
const PriceItems = styled.div`
  max-width: 1265px;
  margin: 0 auto;
`