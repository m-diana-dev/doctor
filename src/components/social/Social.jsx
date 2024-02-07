import {Icon} from "../../components/icon/Icon.jsx";
import styled from "styled-components"

// компонент социальных сетей, принимает как пропсы массив из социальных сетей items
export const Social = ({items}) => {
    return (
        <SocialList>
            {/* eslint-disable-next-line react/prop-types */}
            {items.map(el => <SocialItem key={el.id}><SocialLink href='#'><Icon id={el.title} width={'40'} height={'40'} viewBox={'0 0 40 40'}/></SocialLink></SocialItem>)}
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
    margin-right: 8px;
  }
`
const SocialLink = styled.a`
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s;
  @media (any-hover: hover){
    &:hover{
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    }
  }
  @media ${({theme}) => theme.media.mobile} {
    height: 35px;
    width: 35px;
    svg{
      height: 35px;
      width: 35px;
    }
  }
  svg{
    transition: all .3s;
  }
`