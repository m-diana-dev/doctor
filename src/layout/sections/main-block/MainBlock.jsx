import styled from "styled-components";
import {Container} from "../../../components/Container.js";
import {FlexWrapp} from "../../../components/FlexWrapp.js";
import {Button, StyledButton} from "../../../components/button/Button.jsx";
import MainImg from '../../../assets/images/main-block/main.jpeg'

export const MainBlock = () => {
    return (
        <StyledMainBlock>
            <Container>
                <FlexWrapp justify={'space-between'}>
                    <MainBlockContent>
                        <MainBlockTitle>Офтальмологическая клиника</MainBlockTitle>
                        <MainBlockText>
                            Большой опыт и компетентность наших специалистов, передовое диагностическое оборудование,
                            инновационные методв исследования гарантируют максимально точные результаты диагностики и
                            высокую эффективность лечения.
                        </MainBlockText>
                        <Button as={'a'} href='#appointment'>Записаться на прием</Button>
                    </MainBlockContent>
                    <MainBlockImg>
                        <img src={MainImg} alt="main"/>
                    </MainBlockImg>
                </FlexWrapp>
            </Container>
        </StyledMainBlock>
    );
}

const StyledMainBlock = styled.section`
  background: linear-gradient(90.00deg, rgb(11, 121, 186),rgb(59, 186, 194) 100%);
  padding: 90px 0;
  overflow: hidden;
  color: ${({theme})=>theme.colors.lightText};

  @media ${({theme})=>theme.media.tablet}{
    padding: 70px 0;
  }
  @media ${({theme})=>theme.media.mobile}{
    padding: 50px 0;
  }
  
  ${StyledButton} {
    border-radius: 3px;
    box-shadow: 0px 4px 10px 0px rgba(16, 109, 159, 0.34);
    background: linear-gradient(90.00deg, rgba(0, 0, 0, 0.2), rgb(59, 186, 194) 100%);
    max-width: 200px;

    &::before {
      background: linear-gradient(90.00deg, rgb(34, 160, 217), rgb(59, 186, 194) 100%);
      border-radius: 3px;
    }
  }
  ${FlexWrapp} {
    @media ${({theme})=>theme.media.mobile}{
      flex-direction: column;
    }
  }
`

const MainBlockContent = styled.div`
  max-width: 603px;
  width: 100%;
  margin-right: 70px;
  @media ${({theme})=>theme.media.mobile}{
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 30px;
  }
`
const MainBlockTitle = styled.h1`
  font-size: 56px;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 20px;
  @media ${({theme})=>theme.media.desktop}{
    font-size: 44px;
  }
  @media ${({theme})=>theme.media.tablet}{
    font-size: 36px;
    margin-bottom: 20px;
  }
  @media ${({theme})=>theme.media.mobile}{
    font-size: 32px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 370px){
    font-size: 27px;
  }
`
const MainBlockText = styled.p`
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 38px;
  @media ${({theme})=>theme.media.mobile}{
    margin-bottom: 20px;
  }
`
const MainBlockImg = styled.div`
  max-width: 681px;
  width: 100%;
  height: 457px;
  margin-right: -130px;
  @media ${({theme})=>theme.media.desktop}{
    margin-right: 0;
  }
  @media ${({theme})=>theme.media.mobile}{
    max-width: 100%;
    height: auto;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    @media ${({theme})=>theme.media.mobileSmall}{
      border-radius: 10px;
    }
  }
`