import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="1" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="1" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="1" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="1" />
        </a>
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    width: 5vw;
    height: 100%;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
`;

const Wrap = styled.div`

  
  
  a > img {
    object-fit: contain;
   // border: 2px solid green;
    width: 100%;

    &:hover{
      //border: 2px solid white;
    }
  }

`;

export default ImageSlider;
