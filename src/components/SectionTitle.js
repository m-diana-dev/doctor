import styled from "styled-components";

//Стили для заголовка секции сата
export const SectionTitle = styled.h2`
  color: ${({theme})=>theme.colors.title};
  font-size: 36px;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  @media ${({theme}) => theme.media.desktop} {
    font-size: 34px;
  }
  @media ${({theme}) => theme.media.tablet} {
    font-size: 30px;
  }
  @media ${({theme}) => theme.media.mobile} {
    font-size: 26px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 24px;
  }
`