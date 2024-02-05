import {Icon} from "../../components/icon/Icon.jsx";
import styled from "styled-components";


export const CloseBtn = ({onModalHandler}) => {
    return (
        <StyledCloseBtn onClick={onModalHandler}>
            <Icon id='close' width={'45'} height={'45'} viewBox={'0 0 45 45'}/>
        </StyledCloseBtn>
    );
}

const StyledCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
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
