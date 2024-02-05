import styled from "styled-components";
import {Container} from "../../../components/Container.js";
import {SectionTitle} from "../../../components/SectionTitle.js";
import reviews1 from '../../../assets/images/reviews/item-1.png'
import reviews2 from '../../../assets/images/reviews/item-2.png'
import {ReviewsItem} from "./reviewsItem/ReviewsItem.jsx";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import {Icon} from "../../../components/icon/Icon.jsx";
import arrowDecorLeft from '../../../assets/images/reviews/arrow-decor-left.svg'
import arrowDecorRight from '../../../assets/images/reviews/arrow-decor-right.svg'


export const Reviews = () => {
    const sliderItems = [
        <ReviewsItem key={1} img={reviews2} name={'Анастасия Сиваева'}
                     text={'Очень высокий уровень теоретических и практических знаний, даже в отвлеченных от офтальмологии темах. На обследовании подробное и систематизированное изложение необходимой информации с готовностью в каждый момент углубленно объяснить любой аспект и ответить на любой вопрос. Общая манера общения ненавязчивая и более чем приятная. Спасибо за профессионализм и тёплый приём. Желаю удачи на работе всему коллективу и довольных пациентов!!!'}/>,
        <ReviewsItem key={2} img={reviews1} name={'Марина Александрова'}
                     text={'В связи с глазной проблемой 1 февраля 24-го года пришлось впервые побывать в клинике «Доктор» г. Набержные Челны. Что хочу отметить кроме современного оборудования; понравились отзывчивость и слаженная работа этого центра. Особенно большое спасибо врачу Зульфие Шакирзяновне за её профессионализм и порядочность. Желаю пациентам выздоровления, а медперсоналу никогда не болеть!'}/>,
        <ReviewsItem key={3} img={reviews2} name={'Анастасия Сиваева'}
                     text={'Очень высокий уровень теоретических и практических знаний, даже в отвлеченных от офтальмологии темах. На обследовании подробное и систематизированное изложение необходимой информации с готовностью в каждый момент углубленно объяснить любой аспект и ответить на любой вопрос. Общая манера общения ненавязчивая и более чем приятная. Спасибо за профессионализм и тёплый приём. Желаю удачи на работе всему коллективу и довольных пациентов!!!'}/>
    ]
    const responsive = {
        600: {
            items: 2,
        },
    }
    return (
        <StyledReviews>
            <Container>
                <SectionTitle>Отзывы</SectionTitle>
                <ReviewsItems>
                    <AliceCarousel mouseTracking
                                   responsive={responsive}
                                   items={sliderItems}
                                   renderNextButton={() => {
                                       return <ReviewsItemsArrow><img src={arrowDecorRight} alt="arrow"/></ReviewsItemsArrow>
                                   }}
                                   renderPrevButton={() => {
                                       return <ReviewsItemsArrow><img src={arrowDecorLeft} alt="arrow"/></ReviewsItemsArrow>
                                   }}
                    />
                </ReviewsItems>
            </Container>
        </StyledReviews>
    );
}

const StyledReviews = styled.section`
  padding: 40px 0 105px;
  @media ${({theme})=>theme.media.tablet}{
    padding: 40px 0;
  }
  @media ${({theme})=>theme.media.mobile}{
    padding: 30px 0;
  }

  ${SectionTitle} {
    margin-bottom: 60px;
    @media ${({theme}) => theme.media.tablet} {
      margin-bottom: 35px;
    }
    @media ${({theme}) => theme.media.mobile} {
      margin-bottom: 25px;
    }
  }
`
const ReviewsItems = styled.div`
  .alice-carousel {
    width: calc(100% + 20px);
    margin: 0 -10px;
  }

  .alice-carousel__stage {
    display: flex
  }

  .alice-carousel__wrapper {
    padding-top: 10px;
    padding-bottom: 50px;
    @media ${({theme})=>theme.media.tablet}{
      padding-bottom: 29px;
    }
  }

  li.alice-carousel__stage-item :not(.__cloned) {
    margin-right: 22px;
    margin-left: 22px;
    width: auto !important;
    @media ${({theme})=>theme.media.tablet}{
      margin-right: 10px;
      margin-left: 10px;
    }
  }

  li.alice-carousel__stage-item {
    flex: 1 0 auto;
    height: auto;
  }
  .alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active {
    background: linear-gradient(180.00deg, rgb(34, 160, 217),rgba(57, 182, 192, 0) 100%);
  }
  .alice-carousel__dots-item:not(.__custom):not(:last-child) {
    margin-right: 10px;
  }

  .alice-carousel__next-btn,
  .alice-carousel__prev-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0px 2px 10px 0px rgba(78, 127, 222, 0.2);
    background: rgb(255, 255, 255);
    cursor: pointer;
    transition: all .3s;
    @media (any-hover: hover) {
      &:hover {
        background-color: #fff;
        border-color: #fff;
      }
    }
    @media ${({theme}) => theme.media.tablet} {
      display: none;
    }
  }

  .alice-carousel__next-btn {
    right: -50px;
  }

  .alice-carousel__prev-btn {
    left: -50px;
  }
`
const ReviewsItemsArrow = styled.div`
  width: 20px;
  height: 10px;
`