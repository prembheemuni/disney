import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider"
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import HitMovies from "./HitMovies";

function Home() {
  return (
    <Container>
      <ImageSlider/>
      <Viewers/>
      <Recommends/>
      <NewDisney/>
      <HitMovies/>
    </Container>
  );
}

export default Home;

const Container = styled.main`
  position: relative;
  top: 72px;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  overflow-y: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
 

  &:after {
    background-image: url("/images/home-background.png");
    background-repeat:no-repeat ;
    background-position: fixed;
    background-size: cover;
    position: absolute;
    z-index: -1;
    content: "";
    inset: 0px;
    

  }
`;
