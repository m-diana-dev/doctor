import styled from "styled-components";

//стили для контейнера сайта
export const Container = styled.div`
  position: relative;
  max-width: 1650px;
  width: 100%;
  min-height: 100%;
  padding: 0 150px;
  margin: 0 auto;
  @media ${({theme})=>theme.media.desktop}{
    padding: 0 80px;
    max-width: 1510px;
  }
  @media ${({theme})=>theme.media.tablet}{
    padding: 0 15px;
    max-width: 1380px;
  }
`
