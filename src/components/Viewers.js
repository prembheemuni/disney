import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disney" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="disney" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="disney" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="disney" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="disney" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 15px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    margin-top: 10px;
    padding: 15px 0px 10px;
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid rgba(249, 249, 249, 0.2);
  position: relative;
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;

  img {
    display: block;
    width: 100%;
    position: relative;
    height: 100%;
    z-index: 1;
  }

  &:hover {
    border: 2px solid transparent;
    transform: scale(1.05);
    video {
      visibility: visible;
    }
  }

  video {
    position: absolute;
    top: 0;
    height: 100%;
    visibility: hidden;
  }
`;

export default Viewers;
