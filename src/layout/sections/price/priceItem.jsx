import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.jsx";

// eslint-disable-next-line react/prop-types
export const PriceItem = ({title, value}) => {
    return (
        <StyledPriceItem>
            <Icon id={'arrow-right'} width={'10'} height={'20'} viewBox={'0 0 10 20'}/>
            <PriceItemTitle>{title}</PriceItemTitle>
            <PriceItemValue>{value} ₽</PriceItemValue>
        </StyledPriceItem>
    );
}

const StyledPriceItem = styled.div`
  display: flex;
  align-items: center;
  color: rgb(27, 29, 50);
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1;
  &:not(:last-child){
    margin-bottom: 5px;
  }
  @media ${({theme}) => theme.media.desktop} {
    font-size: 28px;
  }
  @media ${({theme}) => theme.media.tablet} {
    font-size: 22px;
  }
  @media ${({theme}) => theme.media.mobile} {
    font-size: 20px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 18px;
  }
  @media screen and (max-width: 370px) {
    font-size: 16px;
  }
  svg{
    margin-right: 23px;
    @media ${({theme}) => theme.media.tablet} {
      margin-right: 10px;
      width: 7px;
      height: 16px;
    }
    @media ${({theme}) => theme.media.mobile} {
      margin-right: 7px;
      width: 5px;
      height: 14px;
    }
  }
`
const PriceItemTitle = styled.div`
  margin-right: 20px;
  width: 80%;
`
const PriceItemValue = styled.div`
  font-weight: 500;
  width: 15%;
  white-space: nowrap;
`