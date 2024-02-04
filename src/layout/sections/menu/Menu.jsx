import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container.js";

export const Menu = ({menuItems}) => {
    return (
        <StyledMenu>
            <Container>
                <MenuNav>
                    <MenuList>
                        {menuItems.map(el => <MenuItem><MenuLink href="">{el}</MenuLink></MenuItem>)}
                    </MenuList>
                </MenuNav>
            </Container>
        </StyledMenu>
    );
}

const StyledMenu = styled.section`
  padding: 100px 0 20px;
  @media ${({theme})=>theme.media.tablet}{
    padding: 70px 0 20px;
  }
  @media ${({theme})=>theme.media.mobile}{
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
    &:not(:last-child){
      margin-right: 80px;
      @media ${({theme})=>theme.media.desktop}{
        margin-right: 50px;
      }
      @media ${({theme})=>theme.media.tablet}{
        margin-right: 30px;
      }
    }
  @media ${({theme})=>theme.media.desktop}{
    font-size: 18px;
  }
`
const MenuLink = styled.a`
  transition: all .3s;
  @media (any-hover: hover) {
    &:hover {
      color: ${({theme}) => theme.colors.colorMain};
    }
  }
`