import styled from "styled-components";
import {Container} from "../../../components/Container.js";
import {Icon} from "../../../components/icon/Icon.jsx";

export const Menu = ({menuItems}) => {
    return (
        <StyledMenu>
            <Container>
                <MenuNav>
                    <MenuList>
                        {menuItems.map(el => <MenuItem><MenuLink href={el.link}>
                            {el.title} {el.dropdown && <Icon id={'arrow-bottom'} width={'10'} height={'6'} viewBox={'0 0 10 6'}/>}
                        </MenuLink></MenuItem>)}
                    </MenuList>
                </MenuNav>
            </Container>
        </StyledMenu>
    );
}

const StyledMenu = styled.section`
  padding: 100px 0 20px;
  @media ${({theme}) => theme.media.tablet} {
    padding: 70px 0 20px;
  }
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
  svg{
    margin-left: 6px;
  }
`