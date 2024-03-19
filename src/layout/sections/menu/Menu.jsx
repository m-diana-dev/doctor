import styled from "styled-components";
import {Container} from "../../../components/Container.js";


//секция сайта Меню принимает как пропсы menuItems - пункты меню
export const Menu = ({menuItems}) => {
    return (
        <StyledMenu>
            <Container>
                <MenuNav>
                    <MenuList>
                        {menuItems.map(el => <MenuItem key={el.id}><MenuLink href={el.link}>
                            {el.title}
                        </MenuLink></MenuItem>)}
                    </MenuList>
                </MenuNav>
            </Container>
        </StyledMenu>
    );
}

//стили для меню

const StyledMenu = styled.section`
  padding: 40px 0 20px;
  @media ${({theme}) => theme.media.mobile} {
    display: none;
  }
`
const MenuNav = styled.nav`

`
const MenuList = styled.ul`
  display: flex;
  align-items: center;
`
const MenuItem = styled.li`
  color: rgb(27, 29, 50);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;

  &:not(:last-child) {
    margin-right: 80px;
    @media ${({theme}) => theme.media.desktop} {
      margin-right: 50px;
    }
    @media ${({theme}) => theme.media.tablet} {
      margin-right: 30px;
    }
  }

  @media ${({theme}) => theme.media.desktop} {
    font-size: 18px;
  }
`
const MenuLink = styled.a`
  display: flex;
  align-items: center;
  transition: all .3s;
  @media (any-hover: hover) {
    &:hover {
      color: ${({theme}) => theme.colors.colorMain};
    }
  }
`