import styled from "styled-components";

export const StyledModalTile = styled.div`
  color: rgb(27, 29, 50);
  font-size: 56px;
  font-weight: 300;
  line-height: 1.3;
  margin-bottom: 50px;
  @media ${({theme})=>theme.media.desktop}{
    font-size: 40px;
    margin-bottom: 30px;
  }
  @media ${({theme})=>theme.media.mobile}{
    font-size: 30px;
    margin-bottom: 20px;
  }
  @media ${({theme})=>theme.media.mobileSmall}{
    font-size: 26px;
  }
`