import styled from "styled-components";

export const DoctorsItem = ({img, name, position}) => {
    return (
        <StyledDoctorsItem>
            <img src={img} alt="doctor"/>
            <DoctorsItemContent>
                <DoctorsItemName>{name}</DoctorsItemName>
                <DoctorsItemPosition>{position}</DoctorsItemPosition>
            </DoctorsItemContent>
        </StyledDoctorsItem>
    );
}

export const StyledDoctorsItem = styled.article`
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 0px 8px -1px rgba(29, 28, 28, 0.28);
  transition: all .3s;
  color: ${({theme}) => theme.colors.lightText};
  display: flex;
  flex-direction: column;
  @media ${({theme})=>theme.media.mobile}{
    border-radius: 10px;
  }
  @media (any-hover: hover) {
    &:hover {
      box-shadow: inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }

  img {
    width: 100%;
    height: 318px;
    object-fit: cover;
    object-position: top;
    transition: all .3s;
    position: relative;
    z-index: -1;
    @media ${({theme})=>theme.media.mobileSmall}{
      //height: 250px;
    }
  }
`
const DoctorsItemContent = styled.div`
  padding: 22px 24px;
  background: rgb(11, 121, 186);
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`
const DoctorsItemName = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 7px;
  flex: 1 1 auto;
  @media ${({theme})=>theme.media.mobile}{
    font-size: 16px;
  }
`
const DoctorsItemPosition = styled.div`
  font-size: 14px;
`