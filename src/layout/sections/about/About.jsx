import styled from "styled-components";
import {Container} from "../../../components/Container.js";
import {SectionTitle} from "../../../components/SectionTitle.js";
import {Button, StyledButton} from "../../../components/button/Button.jsx";
import aboutImg from "../../../assets/images/about/img.jpeg"
import aboutVideo from "../../../assets/images/about/video.mp4"
import {useState} from "react";


//секция О клинике
export const About = () => {
    //отслеживаем состояние, для переключения фото/видео. используем хук useState
    const [showVideo, setShowVideo] = useState(false);
    return (
        <StyledAbout id='about'>
            <Container>
                <SectionTitle>О клинике</SectionTitle>
                <AboutBtns>
                    <Button onClick={()=>setShowVideo(false)}>Фото</Button>
                    <Button onClick={()=>setShowVideo(true)}>Видео</Button>
                </AboutBtns>
                <AboutContent>
                    <AboutMedia>
                        <AboutMediaImg src={aboutImg} alt="img" show={!showVideo}/>
                        <AboutMediaVideo controls="controls" src={aboutVideo} show={showVideo}></AboutMediaVideo>
                    </AboutMedia>
                    <AboutText>
                        <p>В "Доктор" мы применяем индивидуальный подход и поиск оптимального решения для каждого
                            пациента с учётом его диагноза, возможностей и пожеланий.</p>
                        <p>У нас ведут приём специалисты разных профилей в области офтальмологии и ортокератологии,
                            благодаря чему мы можем предложить нашим клиентам омплексное комплексное лечение проблем
                            зрения.</p>
                        <p>Мы работаем, чтобы у вас появилась возможность увидеть мир в новом высоком разрешении.</p>
                    </AboutText>
                </AboutContent>
            </Container>
        </StyledAbout>
    );
}
//стили секции
const StyledAbout = styled.section`
  padding: 70px 0 67px;
  @media ${({theme})=>theme.media.tablet}{
    padding: 60px 0;
  }
  @media ${({theme})=>theme.media.mobile}{
    padding: 50px 0;
  }
  @media ${({theme})=>theme.media.mobileSmall}{
    padding: 40px 0;
  }

  ${SectionTitle} {
    margin-bottom: 50px;
    @media ${({theme})=>theme.media.tablet}{
      margin-bottom: 35px;
    }
    @media ${({theme})=>theme.media.mobile}{
      margin-bottom: 25px;
    }
  }

`
const AboutBtns = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  @media ${({theme})=>theme.media.mobile}{
    margin-bottom: 20px;
  }

  ${StyledButton} {
    width: 115px;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0px 8px 10px 0px rgba(2, 142, 206, 0.32);

    &:nth-child(1) {
      margin-right: 50px;
      @media ${({theme})=>theme.media.tablet}{
        margin-right: 30px;
      }
      &::before {
        background: linear-gradient(90.00deg, rgb(34, 160, 217), rgb(59, 186, 194) 100%);
      }
    }

    &:nth-child(2) {
      &::before {
        background: linear-gradient(90.00deg, rgb(0, 176, 255), rgb(59, 186, 194) 100%);
      }
    }
  }

`
const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${({theme})=>theme.media.tablet}{
    flex-direction: column-reverse;
  }
`
const AboutMedia = styled.div`
  min-width: 630px;
  height: 390px;
  margin-right: 70px;
  border-radius: 10px;
  overflow: hidden;
  @media ${({theme}) => theme.media.desktop} {
    min-width: 500px;
  }
  @media ${({theme})=>theme.media.tablet}{
    min-width: 100%;
    margin-right: 0;
  }
  @media ${({theme})=>theme.media.mobileSmall}{
    height: 300px;
  }

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const AboutText = styled.div`
  max-width: 550px;
  margin-right: 50px;
  @media screen and (max-width: 1400px) {
    margin-right: 0;
  }
  @media ${({theme})=>theme.media.tablet}{
    max-width: 100%;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`

const AboutMediaImg = styled.img`
  display: ${(props) => (props.show ? 'block' : 'none')};
`
const AboutMediaVideo = styled.video`
  display: ${(props) => (props.show ? 'block' : 'none')};
`