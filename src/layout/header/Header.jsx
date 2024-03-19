import styled, {css} from "styled-components";
import {Container} from "../../components/Container.js";
import {FlexWrapp} from "../../components/FlexWrapp.js";
import LogoImg from '../../assets/images/logo.png'
import {Social, SocialList} from "../../components/social/Social.jsx";


//Шапка сайта, принимает пропсы openMenu, isMenuOpenCallback, menuItems, isFormOpenCallback, openForm
export const Header = ({openMenu, isMenuOpenCallback, menuItems, isFormOpenCallback, openForm}) => {


    //функция отрабатывает при клике по бугрег меню (меняет состояние бургер меню)
    const onBurgerHandler = () => {
        isMenuOpenCallback(!openMenu)
    }
//функция отрабатывает при клике по кнопке обратный звонок (меняет состояние модального окна с формой)
    const onBtnHandler = () => {
        isFormOpenCallback(!openForm);
    };


    //отрисовка шапки сайта
    return (
        <StyledHeader>
            <Container>
                <FlexWrapp justify={'space-between'} align={'center'}>
                    <Logo>
                        <img src={LogoImg} alt="logo"/>
                    </Logo>
                    <HeaderWrapp>
                        <HeaderTime>Ежедневно: 11:00 – 15:00</HeaderTime>
                        <HeaderConnection>
                            <HeaderPhone href='tel:89646987677'>8 (964) 698-76-77</HeaderPhone>
                            <HeaderBtn onClick={onBtnHandler}>Обратный звонок</HeaderBtn>
                        </HeaderConnection>
                        <Social items={[{id: 1, title: 'vk'}, {id: 2, title: 'ok'}]}></Social>
                        <Menu isOpen={openMenu}>
                            <MenuBurger onClick={onBurgerHandler}><span></span></MenuBurger>
                            <MenuBody>
                                <MenuList>
                                    {menuItems.map(el => <MenuItem key={el.id}><MenuLink onClick={onBurgerHandler} href={el.link}>{el.title}</MenuLink></MenuItem>)}
                                </MenuList>
                            </MenuBody>
                        </Menu>
                    </HeaderWrapp>
                </FlexWrapp>
            </Container>
        </StyledHeader>
    );
}

//стили для шапки
const StyledHeader = styled.header`
  padding: 3px 0;
  box-shadow: 0px 2px 10px 0px rgba(78, 127, 222, 0.2);
  background: rgb(255, 255, 255);
  position: relative;
  z-index: 11;
`
const Logo = styled.div`
    img{
      width: 173px;
      @media ${({theme})=>theme.media.desktop}{
        width: 150px;
      }
      @media ${({theme}) => theme.media.mobileSmall} {
        width: 120px;
      }
    }
`
const HeaderWrapp = styled.div`
  display: flex;
  align-items: center;
  color: rgb(27, 29, 50); 
  ${SocialList}{
    @media ${({theme})=>theme.media.mobile}{
      margin-right: 15px;
    }
    @media ${({theme}) => theme.media.mobileSmall} {
      display: none;
    }
  }
`
const HeaderTime = styled.div`
  font-size: 15px;
  line-height: 19px;
  margin-right: 40px;
  @media ${({theme})=>theme.media.desktop}{
    margin-right: 30px;
  }
  @media ${({theme})=>theme.media.tablet}{
    font-size: 14px;
    margin-right: 15px;
  }
  @media ${({theme})=>theme.media.mobile}{
    display: none;
  }
`
const HeaderConnection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  @media ${({theme})=>theme.media.desktop}{
    margin-right: 30px;
  }
  @media ${({theme})=>theme.media.tablet}{
    margin-right: 15px;
  }
`
const HeaderPhone = styled.a`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  @media ${({theme})=>theme.media.desktop}{
    font-size: 18px;
  }
  @media ${({theme})=>theme.media.tablet}{
    font-size: 16px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 14px;
  }
`
const HeaderBtn = styled.button`
  color: ${({theme})=>theme.colors.colorMain};
  font-size: 15px;
  line-height: 19px;
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 14px;
  }
`
const Menu = styled.div`
  display: none;
  @media ${({theme})=>theme.media.mobile}{
    display: block;
  }
  ${props => props.isOpen && css`
    ${MenuBody}{
      top: 54px;
      @media ${({theme})=>theme.media.mobileSmall}{
        top: 50px;
      }
    }
    ${MenuBurger}{
      span {
        transform: scale(0);
      }

      &::before {
        transform: rotate(-45deg);
        top: calc(50% - 1px);
      }

      &::after {
        transform: rotate(45deg);
        bottom: calc(50% - 1px);
      }
    }
  `} 
`
const MenuBurger = styled.button`
  display: none;
  position: relative;
  z-index: 11;
  transition: all .3s;

  @media ${({theme}) => theme.media.mobile} {
    display: block;
  }
  
  span{
    display: block;
    width: 18px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.title};
    border-radius: 2px;
    transition: all .3s;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.title};
    top: 0;
    left: 0;
    border-radius: 2px;
    transition: all .3s;
  }

  &::after {
    transform: translateY(5px);
  }

  &::before {
    transform: translateY(-5px);
  }
}
`

const MenuBody = styled.nav`
  @media ${({theme}) => theme.media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%;
    top: -1000%;
    right: 0;
    overflow: auto;
    background-color: ${({theme}) => theme.colors.colorMain};
    padding: 40px 10px;
    transition: all 0.2s ease 0s;
    z-index: 20;
  }
`
const MenuList = styled.ul`
  display: flex;
  align-items: center;
  @media ${({theme}) => theme.media.mobile} {
    flex-direction: column;
  }
`
const MenuItem = styled.li`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`
const MenuLink = styled.a`
  transition: all .3s;
  @media (any-hover: hover){
    &:hover{
      color: ${({theme})=>theme.colors.colorMain};
    }
  }
`