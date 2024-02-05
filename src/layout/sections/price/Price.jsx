import styled from "styled-components";
import {Container} from "../../../components/Container.js";
import {SectionTitle} from "../../../components/SectionTitle.js";
import {PriceItem} from "./priceItem.jsx";

export const Price = () => {
    return (
        <StyledPrice>
            <Container>
                <SectionTitle>Услуги и цены</SectionTitle>
                <PriceItems>
                    <PriceItem title={'Запишитесь на прием'} value={'1 400'}/>
                    <PriceItem title={'Комплексная диагностика'} value={'2 500'}/>
                    <PriceItem title={'Отдельные виды исследований'} value={'500'}/>
                    <PriceItem title={'Удаление новообразований на веках и глазном яблоке'} value={'3 500'}/>
                    <PriceItem title={'Детская офтальмология'} value={'3 500'}/>
                    <PriceItem title={'Аппаратное лечение'} value={'350'}/>
                    <PriceItem title={'Подбор очков и контактных линз'} value={'800'}/>
                </PriceItems>
            </Container>
        </StyledPrice>
    );
}

const StyledPrice = styled.section`
  padding: 36px 0 46px;
  @media ${({theme}) => theme.media.tablet} {
    padding: 30px 0 40px;
  }
  @media ${({theme}) => theme.media.mobile} {
    padding: 20px 0 40px;
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
      width: 364px;
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

`