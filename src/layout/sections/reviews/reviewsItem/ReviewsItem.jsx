import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export const ReviewsItem = ({name, img, text}) => {
    return (
        <StyledReviewsItem>
            <ReviewsItemTop>
                <img src={img} alt="avatar"/>
                <ReviewsItemName>{name}</ReviewsItemName>
            </ReviewsItemTop>
            <ReviewsItemText>
                {text}
            </ReviewsItemText>
        </StyledReviewsItem>
    );
}

const StyledReviewsItem = styled.article`
  border-radius: 20px;
  box-shadow: 0px 10px 26px 0px rgba(165, 175, 197, 0.24);
  background: rgb(255, 255, 255);
  padding: 30px 35px 35px;
  height: 100%;
  @media ${({theme})=>theme.media.tablet}{
    padding: 20px;
  }
`
const ReviewsItemTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  margin-right: 0 !important;
  margin-left: 0 !important;
  @media ${({theme})=>theme.media.tablet}{
    margin-bottom: 15px;
  }
  img{
    width: 77px;
    height: 77px;
    border-radius: 50%;
    margin-right: 18px!important;
    object-fit: cover;
    margin-left: 0 !important;
    @media ${({theme})=>theme.media.tablet}{
      width: 50px;
      height: 50px;
      margin-right: 14px!important;
    }
  }
`
const ReviewsItemName = styled.div`
  color: rgb(27, 29, 50);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.1;
  margin-right: 0 !important;
  margin-left: 0 !important;
  @media ${({theme})=>theme.media.tablet}{
    font-size: 18px;
  }
`
const ReviewsItemText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-right: 0 !important;
  margin-left: 0 !important;
  @media ${({theme})=>theme.media.tablet}{
    font-size: 15px;
  }
`