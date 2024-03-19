import styled, {css} from "styled-components";
import {Icon} from "../../../components/icon/Icon.jsx";
import {useState} from "react";

// компонент цены, принимает пропсы title, value, text
export const PriceItem = ({title, value, text}) => {
    //состояние для элемента прайса. Изначально описание скрыто (false). С помощью useState меняем состояние при клике по заголовку прайса
    const [isExpanded, setIsExpanded] = useState(false);

    //функция обратного вызова для смены состояния элемента прайса
    const toggleExpansion = () => {
        setIsExpanded(prevState => !prevState);
    };
    return (
        <StyledPriceItem $isExpanded={isExpanded}>
            <PriceItemTop onClick={toggleExpansion}>
                <Icon id={'arrow-right'} width={'13'} height={'20'} viewBox={'0 0 13 20'}/>
                <PriceItemTitle>{title}</PriceItemTitle>
                <PriceItemValue>{value} ₽</PriceItemValue>
            </PriceItemTop>
            <PriceItemBottom>
                {text}
            </PriceItemBottom>
        </StyledPriceItem>
    );
}
// стили компонента
const StyledPriceItem = styled.div`
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1;
  &:not(:last-child){
    margin-bottom: 10px;
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
  ${props => props.$isExpanded && css`
    svg {
      transform: rotate(90deg);
    }
    ${PriceItemBottom}{
      display: block;
    }
  `}
  svg{
    margin-right: 10px;
    transition: all .3s;
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
const PriceItemTop = styled.div`
  display: flex;
  align-items: center;
`
const PriceItemTitle = styled.div`
  margin-right: 20px;
  width: 85%;
  @media ${({theme}) => theme.media.mobile} {
  width: 80%;
}
`
const PriceItemValue = styled.div`
  font-weight: 500;
  width: 10%;
  white-space: nowrap;
  @media ${({theme}) => theme.media.mobile} {
    width: 15%;
  }
`
const PriceItemBottom = styled.div`
  display: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  margin-top: 10px;
  @media ${({theme}) => theme.media.tablet} {
    font-size: 18px;
  }
  @media ${({theme}) => theme.media.mobile} {
    font-size: 16px;
    margin-top: 5px;
  }
  @media screen and (max-width: 370px) {
    font-size: 14px;
  }
`