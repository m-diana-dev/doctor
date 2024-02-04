import styled from "styled-components";

export const Button = ({children}) => {
    return (
        <StyledButton>
            <span>{children}</span>
        </StyledButton>
    );
}

export const StyledButton = styled.button`
  display: flex;
  padding: 13px;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 6px;
  width: 100%;
  max-width: 190px;
  box-shadow: 0px 4px 10px 0px rgba(16, 109, 159, 0.34);
  background: linear-gradient(180.00deg, rgba(0, 0, 0, 0.16),rgb(57, 182, 192) 100%);
  color: ${({theme})=>theme.colors.lightText};
  font-size: 15px;
  line-height: 19px;
  transition: all .3s;
  &::before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180.00deg, rgb(34, 160, 217),rgb(57, 182, 192) 100%);
    border-radius: 6px;
    opacity: 1;
    transition: all .3s;
  }
  @media (any-hover: hover) {
    &:hover {
      &:before{
        opacity: 0;
      }
    }
  }
  span{
    position: relative;
    z-index: 2;
  }
`