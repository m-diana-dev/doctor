import styled from "styled-components";
import check from '../../assets/images/appointment/check.svg'

//компонент Checkbox
export const Checkbox = ({checked, onChange}) => {
    return (
        <StyledCheckbox>
            <CheckboxInput type="checkbox" checked={checked} onChange={onChange}></CheckboxInput>
            <CheckboxLabel>
                <CheckboxText>
                    Нажимая кнопку, я соглашаюсь с Политикой конфиденциальности и условиями обработки
                    персональных данных
                </CheckboxText>
            </CheckboxLabel>
        </StyledCheckbox>
    );
}

//стили компонента Checkbox
export const StyledCheckbox = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  @media ${({theme}) => theme.media.mobileSmall} {
    margin-bottom: 15px;
  }
  &.disabled{
    opacity: 0.5;
    pointer-events: none;
  }
  input{
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;
    &:checked+label:after {
      transform: scale(1);
    }
  }
`
const CheckboxInput = styled.input`

`
const CheckboxLabel = styled.label`
  cursor: pointer;
  display: inline-flex;
  position: relative;
  font-size: 16px;
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 14px;
  }
  &:before {
    margin-top: 5px;
    content: "";
    flex: 0 0 14px;
    width: 14px;
    height: 14px;
    border: 1px solid rgb(0, 0, 0);
    background: rgb(255, 255, 255);
  }
  &::after {
    content:url(${check});
    width: 9px;
    height: 9px;
    transform: scale(0);
    position: absolute;
    top: 2px;
    left: 2px;
    transition: all .3s;
  }
`
export const CheckboxText = styled.span`
  color: rgb(126, 131, 174);
  font-size: 14px;
  line-height: 18px;
  margin-left: 8px;
`