import styled from "styled-components";

// компонент цены, принимает пропсы title, value
export const PriceItem = ({title, value}) => {
    return (
        <StyledPriceItem>
            <PriceItemTitle>{title}</PriceItemTitle>
            <PriceItemValue>{value} ₽</PriceItemValue>
        </StyledPriceItem>
    );
}
// стили компонента
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