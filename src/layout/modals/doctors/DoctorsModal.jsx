import styled, {css} from "styled-components";
import {useEffect, useRef} from "react";
import {CloseBtn, StyledCloseBtn} from "../CloseBtn.jsx";


// Модальное окносо врачей. принимает как пропсы openDoctors, isDoctorsOpenCallback для изменения состояния
export const DoctorsModal = ({img, name, position, experience, specialization, openDoctors, isDoctorsOpenCallback}) => {

    const modalRef = useRef();
    // Функция для обработки клика вне модального окна
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            // Если клик сделан вне модального окна, закрываем его
            isDoctorsOpenCallback(false);
        }
    };

    // Добавляем слушатель событий для клика вне модального окна
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Функция обратного вызова, которая меняет состояние модального окна, с ее помощью закрываем модальное окно
    const onModalHandler = () => {
        isDoctorsOpenCallback(!openDoctors)
    }

    // Отрисовка модального окна
    return (
        <StyledDoctorsModal isOpen={openDoctors} ref={modalRef}>
            <CloseBtn onModalHandler={onModalHandler} idIcon={'close'}/>
            <DoctorsModalContent>
                <DoctorsModalTitle>{name.lastName + `\n` + name.firstName + `\n`+ name.surName}</DoctorsModalTitle>
                <DoctorsModalItem>{position}</DoctorsModalItem>
                <DoctorsModalItem>Стаж работы: {experience}</DoctorsModalItem>
                <DoctorsModalItem>Специализация: {specialization}</DoctorsModalItem>
            </DoctorsModalContent>
            <DoctorsModalImg src={img}/>
        </StyledDoctorsModal>
    );
}


// стили для модального окна

const StyledDoctorsModal = styled.div`
  display: none;
  justify-content: space-between;
  position: fixed;
  max-width: 810px;
  width: 100%;
  max-height: calc(100vh - 100px);
  overflow: auto;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  background-color: #fff;
  z-index: 10;
  @media ${({theme}) => theme.media.desktop} {
    max-width: 90%
  }
  @media ${({theme}) => theme.media.mobile} {
    flex-direction: column;
  }

  ${props => props.isOpen && css`
    display: flex;
  `}
  ${StyledCloseBtn} {
    top: 10px;
    right: 10px;
    svg {
      height: 30px;
      width: 30px;
    }
  }
`
const DoctorsModalContent = styled.div`
  padding: 60px 45px 25px 55px;
  @media ${({theme}) => theme.media.tablet} {
    padding: 30px 20px 20px;
  }
`
const DoctorsModalTitle = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  color: #363636;
  margin-bottom: 20px;
  white-space: pre;
  @media ${({theme}) => theme.media.desktop} {
    font-size: 32px;
  }
  @media ${({theme}) => theme.media.mobile} {
    font-size: 26px;
    margin-bottom: 15px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 22px;
    margin-bottom: 10px;
  }
`
const DoctorsModalItem = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: #3e3e3e;
  &:not(:last-child){
    margin-bottom: 5px;
  }
  @media ${({theme}) => theme.media.mobile} {
    font-size: 18px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    font-size: 16px;
  }
`
const DoctorsModalImg = styled.img`
  max-width: 308px;
  width: 100%;
  object-fit: cover;
  @media ${({theme}) => theme.media.mobile} {
    margin: 0 auto;
    max-width: 100%;
    width: auto;
    height: 300px;
  }
`