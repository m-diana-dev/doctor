import {Icon} from "../../components/icon/Icon.jsx";
import styled from "styled-components";


export const CloseBtn = ({onModalHandler, idIcon}) => {
    return (
        <StyledCloseBtn onClick={onModalHandler}>
            <Icon id={idIcon} width={'52'} height={'52'} viewBox={'0 0 52 52'}/>
        </StyledCloseBtn>
    );
}

export const StyledCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  @media ${({theme})=>theme.media.desktop}{
    top: 10px;
    right: 10px;
  }
  svg{
    @media ${({theme})=>theme.media.desktop}{
      height: 30px;
      width: 30px;
    }
  }
`
