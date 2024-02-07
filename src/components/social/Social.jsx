import {Icon} from "../../components/icon/Icon.jsx";
import styled from "styled-components"

// компонент социальных сетей, принимает как пропсы массив из социальных сетей items
export const Social = ({items}) => {
    return (
        <SocialList>
            {/* eslint-disable-next-line react/prop-types */}
            {items.map(el => <SocialItem><SocialLink href='#'><Icon id={el} width={'20'} height={'20'} viewBox={'0 0 20 20'}/></SocialLink></SocialItem>)}
        </SocialList>
    );
}


// стили для социальных сетей
export const SocialList = styled.ul`
  display: flex;
  align-items: center;
`
const SocialItem = styled.li`
  &:not(:last-child){
    margin-right: 14px;
    @media ${({theme}) => theme.media.mobile} {
      margin-right: 10px;
    }
  }
`
const SocialLink = styled.a`
  display: block;
  height: 46px;
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 6px 10px 0px rgba(201, 210, 234, 0.4);
  background: ${({theme})=>theme.colors.primaryBg};
  transition: all .3s;
  @media (any-hover: hover){
    &:hover{
       box-shadow: none;
    }
  }
  @media ${({theme}) => theme.media.mobile} {
    height: 35px;
    width: 35px;
  }
  svg{
    transform: translateY(2px);
    transition: all .3s;
  }
`