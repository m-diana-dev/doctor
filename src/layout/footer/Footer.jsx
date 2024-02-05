import styled from "styled-components";
import {Container} from "../../components/Container.js";
import {FlexWrapp} from "../../components/FlexWrapp.js";
import LogoImg from "../../assets/images/logo-footer.png";
import {Social, SocialList} from "../../components/social/Social.jsx";

export const Footer = ({menuItems}) => {
    return (
        <StyledFooter>
            <FooterBody>
                <Container>
                    <FlexWrapp justify={'space-between'}>
                        <Logo>
                            <img src={LogoImg} alt="logo"/>
                        </Logo>
                        <FooterMenu>
                            <FooterMenuTitle>Пациентам</FooterMenuTitle>
                            <FooterMenuList>
                                {menuItems.map(el => <FooterMenuItem><FooterMenuLink href={el.link}>{el.title}</FooterMenuLink></FooterMenuItem>)}
                            </FooterMenuList>
                        </FooterMenu>
                        <FooterConnection>
                            <FooterTime>Ежедневно  11:00 – 15:00</FooterTime>
                            <FooterPhone href='tel:79646987677'>8 (964) 698-76-77</FooterPhone>
                            <Social items={['whatsapp', 'telegram']}></Social>
                        </FooterConnection>
                    </FlexWrapp>
                </Container>
            </FooterBody>
            <FooterBottom>
                <Container>
                    <FlexWrapp justify={'center'}>
                        <FooterBottomItem>© 2024 Все права защищены</FooterBottomItem>
                        <FooterBottomItem as='a' href='#'>Политика конфиденцильности</FooterBottomItem>
                    </FlexWrapp>
                </Container>
            </FooterBottom>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
  background: linear-gradient(90.00deg, rgb(12, 102, 156), rgb(59, 186, 194) 100%);
  color: ${({theme}) => theme.colors.lightText};
`
const FooterBody = styled.div`
  padding: 35px 0 50px;
  @media ${({theme}) => theme.media.mobile} {
    padding: 25px 0 40px;
  }

  ${FlexWrapp} {
    max-width: 1111px;
    width: 100%;
    @media ${({theme}) => theme.media.mobile} {
      flex-direction: column;
      text-align: center;
    }
  }
  ${SocialList}{
    @media ${({theme}) => theme.media.mobile} {
      justify-content: center;
    }
  }
`
const Logo = styled.div`
    img{
      width: 299px;
      @media ${({theme})=>theme.media.desktop}{
        width: 200px;
      }
      @media ${({theme}) => theme.media.mobile} {
        margin-bottom: 20px;
      }
    }
`

const FooterMenu = styled.nav`
  @media ${({theme}) => theme.media.mobile} {
    margin-bottom: 20px;
  }
`
const FooterMenuTitle = styled.div`
  color: rgb(27, 29, 50);
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  @media ${({theme}) => theme.media.tablet} {
    font-size: 20px;
  }
`
const FooterMenuList = styled.ul`
  -moz-column-count: 2;
  -webkit-column-count: 2;
  column-count: 2;
  column-gap: 90px;
  @media ${({theme}) => theme.media.tablet} {
    column-gap: 30px;
  }
`
const FooterMenuItem = styled.li`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  @media ${({theme}) => theme.media.tablet} {
    font-size: 18px;
    margin-bottom: 15px;
  }
`
const FooterMenuLink = styled.a`

`
const FooterConnection = styled.div`

`
const FooterTime = styled.div`
  font-size: 15px;
  margin-bottom: 15px;
`
const FooterPhone = styled.a`
  display: block;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 18px;
  @media ${({theme}) => theme.media.tablet} {
    font-size: 18px;
  }
`

const FooterBottom = styled.div`
  background: rgba(27, 29, 50, 0.26);
  padding: 14px 0;
  ${FlexWrapp}{
    @media ${({theme})=>theme.media.mobile}{
      flex-direction: column-reverse;
    }
  }
`
const FooterBottomItem = styled.div`
  font-size: 14px;
  line-height: 1.5;

  &:not(:last-child) {
    margin-right: 50px;
    @media ${({theme})=>theme.media.mobile}{
      margin-right: 0;
    }
  }
  &:last-child{
    @media ${({theme})=>theme.media.mobile}{
      margin-bottom: 5px;
    }
  }
`